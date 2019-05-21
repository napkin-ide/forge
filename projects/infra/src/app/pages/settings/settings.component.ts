import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ForgeInfrastructureState, ForgeInfrastructureSetupStepTypes } from '../../state/infra.state';
import { ForgeInfrastructureStateManagerContext } from '../../state/infra-state-manager.context';

@Component({
  selector: 'lcu-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations: []
})
export class SettingsComponent implements OnInit {
  //  Fields

  //  Properties
  public get GitHubOAuthURL(): string {
    return `/.github/oauth?redirectUrl=${window.location.href}`;
  }
  public Settings: any;

  public SetupStepTypes = ForgeInfrastructureSetupStepTypes;

  public State: ForgeInfrastructureState;

  public UseDefaultSettings: boolean;

  //  Constructors
  constructor(protected formBldr: FormBuilder, protected infraState: ForgeInfrastructureStateManagerContext) {
    this.Settings = {};

    this.UseDefaultSettings = true;
  }

  //  Life Cycle
  public ngOnInit() {
    this.infraState.Context.subscribe(state => {
      this.State = state;
    });
  }

  //  API methods
  public GetStartedWithAzure() {
    this.State.Loading = true;

    this.UseDefaultSettings = true;

    this.infraState.SetSetupStep(this.SetupStepTypes.Azure);
  }

  public Configure() {
    this.State.Loading = true;

    this.infraState.ConfigureInfrastructure(this.SetupStepTypes.Azure.toString(), this.UseDefaultSettings, this.Settings);
  }

  //  Helpers
}
