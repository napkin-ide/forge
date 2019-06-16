import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ForgeInfrastructureState, ForgeInfrastructureSetupStepTypes } from '../../state/infra.state';
import { ForgeInfrastructureStateManagerContext } from '../../state/infra-state-manager.context';
import { MatSelectChange, MatStepper } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { InfrastructureApplicationSeedOption } from './../../state/infra.state';

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

  public DataAppSetupFormGroup: FormGroup;

  public DevOpsSetupFormGroup: FormGroup;

  public EntInfraFormGroup: FormGroup;

  public get GitHubOAuthURL(): string {
    return `/.github/oauth?redirectUri=${this.OAuthRedirectURL}`;
  }

  public InfraConfigFormGroup: FormGroup;

  public InfraSetupFormGroup: FormGroup;

  public get OAuthRedirectURL(): string {
    return `${location.protocol}//${location.hostname}:${location.port}/forge`;
  }

  public SetupStepTypes = ForgeInfrastructureSetupStepTypes;

  public State: ForgeInfrastructureState;

  @ViewChild(MatStepper)
  public Stepper: MatStepper;

  public UseDefaultSettings: boolean;

  //  Constructors
  constructor(
    protected formBldr: FormBuilder,
    protected infraState: ForgeInfrastructureStateManagerContext,
    protected sanitizer: DomSanitizer
  ) {
    this.UseDefaultSettings = true;
  }

  //  Life Cycle
  public ngOnInit() {
    this.DataAppSetupFormGroup = this.formBldr.group({});

    this.DevOpsSetupFormGroup = this.formBldr.group({
      npmRegistry: ['', Validators.required],
      npmAccessToken: ['', Validators.required]
    });

    this.EntInfraFormGroup = this.formBldr.group({});

    this.InfraConfigFormGroup = this.formBldr.group({
      azureTenantId: ['', Validators.required],
      azureSubId: ['', Validators.required],
      azureAppId: ['', Validators.required],
      azureAppAuthKey: ['', Validators.required]
    });

    this.InfraSetupFormGroup = this.formBldr.group({});

    this.infraState.Context.subscribe(state => {
      this.State = state;

      this.stateChanged();

      // For Debug
      console.log(this.State);
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

  public CommitInfra() {
    this.State.Loading = true;

    this.infraState.CommitInfrastructure();
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

    this.infraState.CreateAppFromSeed(this.State.AppSeed.NewName);
  }

  public GetCurrentStepIndex(): number {
    if (this.State.ProductionConfigured) {
      return 4;
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

  public SetInfraTemplate(event: MatSelectChange) {
    this.State.Loading = true;

    this.infraState.SetSelectedInfraTemplate(event.value);
  }

  public SetOrg(event: MatSelectChange) {
    this.State.Loading = true;

    this.infraState.SetSelectedOrg(event.value);
  }

  public SetupApplicationSeed(lookup: string) {
    this.State.Loading = true;

    this.infraState.SetupApplicationSeed(lookup);
  }

  //  Helpers
  protected stateChanged() {
    if (!this.State.EnvSettings) {
      this.State.EnvSettings = {};
    }

    this.DevOpsSetupFormGroup.patchValue({
      npmRegistry: this.State.DevOps.NPMRegistry,
      npmAccessToken: this.State.DevOps.NPMAccessToken
    });

    this.InfraConfigFormGroup.patchValue({
      azureTenantId: this.State.EnvSettings.AzureTenantID,
      azureSubId: this.State.EnvSettings.AzureSubID,
      azureAppId: this.State.EnvSettings.AzureAppID,
      azureAppAuthKey: this.State.EnvSettings.AzureAppAuthKey
    });

    this.Stepper.linear = false;

    this.Stepper.selectedIndex = 0;

    const stepIndex = this.GetCurrentStepIndex();

    for (let i = 0; i < stepIndex; i++) {
      this.Stepper.next();
    }

    this.Stepper.linear = true;
  }
}
