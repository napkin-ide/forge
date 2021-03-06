import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ForgeInfrastructureState, ForgeInfrastructureSetupStepTypes } from '../../state/infra.state';
import { ForgeInfrastructureStateManagerContext } from '../../state/infra-state-manager.context';
import { MatSelectChange, MatStepper } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { InfrastructureApplicationSeedOption } from './../../state/infra.state';
import { Router } from '@angular/router';

@Component({
  selector: 'lcu-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations: []
})
export class SettingsComponent implements OnInit {
  //  Fields

  //  Properties
  public get AzureDevOpsOAuthURL(): string {
    return `/.devops/oauth?redirectUri=${this.OAuthRedirectURL}`;
  }

  public get CurrentAppSeed(): InfrastructureApplicationSeedOption {
    return this.State.AppSeed && this.State.AppSeed.SelectedSeed
      ? this.State.AppSeed.Options.find(o => o.Lookup === this.State.AppSeed.SelectedSeed)
      : null;
  }

  public get CurrentAppSeedOptions(): InfrastructureApplicationSeedOption[] {
    return this.State.AppSeed && this.State.AppSeed.Options
      ? this.State.AppSeed.Options.filter(o => o.Lookup.startsWith(this.State.InfraTemplate.SelectedTemplate))
      : [];
  }

  public DataAppSetupFormGroup: FormGroup;

  public DevOpsSetupFormGroup: FormGroup;

  public EntInfraFormGroup: FormGroup;

  public get GitHubOAuthURL(): string {
    return `/.github/oauth?redirectUri=${this.OAuthRedirectURL}`;
  }

  public InfraConfigFormGroup: FormGroup;

  public get OAuthRedirectURL(): string {
    return `${this.RootURL}/forge`;
  }

  public get RootURL(): string {
    const port = location.port ? `:${location.port}` : '';

    return `${location.protocol}//${location.hostname}${port}`;
  }

  public SetupStepTypes = ForgeInfrastructureSetupStepTypes;

  public State: ForgeInfrastructureState;

  /**
   * { static: true } option was introduced to support creating embedded
   * views on the fly. When you are creating a view dynamically and want to
   * acces the TemplateRef, you won't be able to do so in ngAfterViewInit as
   * it will cause a ExpressionHasChangedAfterChecked error. Setting the static
   * flag to true will create your view in ngOnInit.
   */
  @ViewChild(MatStepper, {static: true})
  public Stepper: MatStepper;

  public UseDefaultSettings: boolean;

  //  Constructors
  constructor(
    protected formBldr: FormBuilder,
    protected infraState: ForgeInfrastructureStateManagerContext,
    protected sanitizer: DomSanitizer,
    protected router: Router
  ) {
    this.UseDefaultSettings = true;
  }

  //  Life Cycle
  public ngOnInit() {
    this.DataAppSetupFormGroup = this.formBldr.group({
      appName: ['', Validators.required],
      infraTemplate: ['', Validators.required],
    });

    this.DevOpsSetupFormGroup = this.formBldr.group({
      npmRegistry: ['', Validators.required],
      npmAccessToken: ['', Validators.required],
      devOpsAppId: [''],
      devOpsClientSecret: [''],
      devOpsScopes: ['']
    });

    this.EntInfraFormGroup = this.formBldr.group({});

    this.InfraConfigFormGroup = this.formBldr.group({
      azureTenantId: ['', Validators.required],
      azureSubId: ['', Validators.required],
      azureAppId: ['', Validators.required],
      azureAppAuthKey: ['', Validators.required],
      gitHubClientId: [''],
      gitHubClientSecret: ['']
    });

    this.infraState.Context.subscribe(state => {
      if (state.AppSeed && state.AppSeed.Step) {
        this.router.navigate(['complete']);
      } else if (state.GitHub && state.GitHub.OAuthConfigured && !state.SourceControlConfigured) {
        window.open(this.GitHubOAuthURL, '_parent');
      } else if (state.DevOps && state.DevOps.OAuthConfigured && !state.DevOps.Configured) {
        window.open(this.AzureDevOpsOAuthURL, '_parent');
      } else {
        this.State = state;

        this.stateChanged();

        // For Debug
        console.log(this.State);
      }
    });
  }

  //  API methods
  public CancelSetup() {
    this.State.Loading = true;

    this.infraState.SetSetupStep(null);
  }

  public CleanImage(source: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(source);
  }

  public CommitInfra(event: MatSelectChange) {
    this.State.Loading = true;

    this.infraState.CommitInfrastructure(event.value);
  }

  public Configure() {
    this.State.Loading = true;

    this.State.EnvSettings.AzureTenantID = this.InfraConfigFormGroup.controls.azureTenantId.value;

    this.State.EnvSettings.AzureSubID = this.InfraConfigFormGroup.controls.azureSubId.value;

    this.State.EnvSettings.AzureAppID = this.InfraConfigFormGroup.controls.azureAppId.value;

    this.State.EnvSettings.AzureAppAuthKey = this.InfraConfigFormGroup.controls.azureAppAuthKey.value;

    this.infraState.ConfigureInfrastructure(this.SetupStepTypes.Azure.toString(), this.UseDefaultSettings, this.State.EnvSettings);
  }

  public ConfigureDevOps() {
    this.State.Loading = true;

    const npmRegistry: string = this.DevOpsSetupFormGroup.controls.npmRegistry.value;

    const npmAccessToken: string = this.DevOpsSetupFormGroup.controls.npmAccessToken.value;

    this.infraState.ConfigureDevOps(npmRegistry, npmAccessToken);
  }

  public CreateAppFromSeed() {
    this.State.Loading = true;

    this.infraState.CreateAppFromSeed(this.DataAppSetupFormGroup.controls.appName.value);
  }

  public GetCurrentStepIndex(): number {
    if (this.State.ProductionConfigured) {
      return 3;
    } else if (this.State.DevOps && this.State.DevOps.Setup) {
      return 3;
    } else if (this.State.InfrastructureConfigured) {
      return 2;
    } else {
      if (this.State.SetupStep) {
        return 1;
      } else {
        return 0;
      }
    }
  }

  public GetStartedWithAzure() {
    this.State.Loading = true;

    this.UseDefaultSettings = true;

    this.infraState.SetSetupStep(this.SetupStepTypes.Azure);
  }

  public SetOrg(event: MatSelectChange) {
    this.State.Loading = true;

    this.infraState.SetSelectedOrg(event.value);
  }

  public SetupApplicationSeed(lookup: string) {
    this.State.Loading = true;

    this.infraState.SetupApplicationSeed(lookup);
  }

  public SetupDevOpsOAuth() {
    this.State.Loading = true;

    this.infraState.SetupDevOpsOAuth(
      this.DevOpsSetupFormGroup.controls.devOpsAppId.value,
      this.DevOpsSetupFormGroup.controls.devOpsScopes.value,
      this.DevOpsSetupFormGroup.controls.devOpsClientSecret.value
    );
  }

  public SetupGitHubOAuth() {
    this.State.Loading = true;

    this.infraState.SetupGitHubOAuth(
      this.InfraConfigFormGroup.controls.gitHubClientId.value,
      this.InfraConfigFormGroup.controls.gitHubClientSecret.value
    );
  }

  //  Helpers
  protected stateChanged() {
    if (!this.State.EnvSettings) {
      this.State.EnvSettings = {};
    }

    if (this.State.InfraTemplate) {
      this.DataAppSetupFormGroup.patchValue({
        infraTemplate: this.State.InfraTemplate.SelectedTemplate
      });
    }

    if (this.State.DevOps) {
      this.DevOpsSetupFormGroup.patchValue({
        npmRegistry: this.State.DevOps.NPMRegistry,
        npmAccessToken: this.State.DevOps.NPMAccessToken
      });
    }

    if (this.State.EnvSettings) {
      this.InfraConfigFormGroup.patchValue({
        azureTenantId: this.State.EnvSettings.AzureTenantID,
        azureSubId: this.State.EnvSettings.AzureSubID,
        azureAppId: this.State.EnvSettings.AzureAppID,
        azureAppAuthKey: this.State.EnvSettings.AzureAppAuthKey
      });
    }

    this.Stepper.linear = false;

    this.Stepper.selectedIndex = 0;

    const stepIndex = this.GetCurrentStepIndex();

    for (let i = 0; i < stepIndex; i++) {
      this.Stepper.next();
    }

    this.Stepper.linear = true;
  }

  public NextStep(): void {
    this.Stepper.linear = false;
      this.Stepper.next();
      this.Stepper.linear = true;
  }

  public PreviousStep(): void {
    this.Stepper.linear = false;
    this.Stepper.previous();
    this.Stepper.linear = true;
  }

  public complete(): void {
    this.router.navigate(['complete']);
  }
}
