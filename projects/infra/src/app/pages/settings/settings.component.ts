import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ForgeInfrastructureState, ForgeInfrastructureSetupStepTypes } from '../../state/infra.state';
import { ForgeInfrastructureStateManagerContext } from '../../state/infra-state-manager.context';
import { MatSelectChange } from '@angular/material';

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
    return `/.devops/oauth?redirectUrl=${window.location.href}`;
  }

  public EntInfraFormGroup: FormGroup;

  public get GitHubOAuthURL(): string {
    return `/.github/oauth?redirectUrl=${window.location.href}`;
  }

  public InfraConfigFormGroup: FormGroup;

  public InfraSetupFormGroup: FormGroup;

  public SetupStepTypes = ForgeInfrastructureSetupStepTypes;

  public State: ForgeInfrastructureState;

  public UseDefaultSettings: boolean;

  //  Constructors
  constructor(protected formBldr: FormBuilder, protected infraState: ForgeInfrastructureStateManagerContext) {
    this.UseDefaultSettings = true;
  }

  //  Life Cycle
  public ngOnInit() {
    this.EntInfraFormGroup = this.formBldr.group({
    });

    this.InfraConfigFormGroup = this.formBldr.group({
    });

    this.InfraSetupFormGroup = this.formBldr.group({
    });

    this.infraState.Context.subscribe(state => {
      this.State = state;

      if (!this.State.EnvSettings) {
        this.State.EnvSettings = {};
      }

      // For Debug
      console.log(this.State);
    });
  }

  //  API methods
  public CancelSetup() {
    this.State.Loading = true;

    this.infraState.SetSetupStep(null);
  }

  public CommitInfra() {
    this.State.Loading = true;

    this.infraState.CommitInfrastructure();
  }

  public GetStartedWithAzure() {
    this.State.Loading = true;

    this.UseDefaultSettings = true;

    this.infraState.SetSetupStep(this.SetupStepTypes.Azure);
  }

  public Configure() {
    this.State.Loading = true;

    this.infraState.ConfigureInfrastructure('tst', this.SetupStepTypes.Azure.toString(), this.UseDefaultSettings, this.State.EnvSettings);
  }

  public SetInfraTemplate(event: MatSelectChange) {
    this.State.Loading = true;

    this.infraState.SetSelectedInfraTemplate(event.value);
  }

  public SetOrg(event: MatSelectChange) {
    this.State.Loading = true;

    this.infraState.SetSelectedOrg(event.value);
  }

  //  Helpers
}
