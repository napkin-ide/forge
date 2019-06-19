import { ForgeInfrastructureState, ForgeInfrastructureSetupStepTypes } from './infra.state';
import { StateManagerContext } from '@lcu-ide/common';
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgeInfrastructureStateManagerContext extends StateManagerContext<ForgeInfrastructureState> {
  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  API Methods
  public AppSeedCompleteCheck() {
    this.Execute({
      Arguments: {},
      Type: 'app-seed-complete-check'
    });
  }

  public CommitInfrastructure() {
    this.Execute({
      Arguments: {},
      Type: 'commit-infrastructure'
    });
  }

  public ConfigureDevOps(npmRegistry: string, npmAccessToken: string) {
    this.Execute({
      Arguments: {
        NPMRegistry: npmRegistry,
        NPMAccessToken: npmAccessToken
      },
      Type: 'configure-dev-ops'
    });
  }

  public ConfigureInfrastructure(infraType: string, useDefaultSettings: boolean, settings: any) {
    this.Execute({
      Arguments: {
        InfrastructureType: infraType,
        Settings: settings,
        UseDefaultSettings: useDefaultSettings
      },
      Type: 'configure-infra'
    });
  }

  public CreateAppFromSeed(name: string) {
    this.Execute({
      Arguments: {
        Name: name
      },
      Type: 'create-app-from-seed'
    });
  }

  public SetSelectedInfraTemplate(template: string) {
    this.Execute({
      Arguments: {
        Template: template
      },
      Type: 'set-selected-infrastructure-template'
    });
  }

  public SetSelectedOrg(org: string) {
    this.Execute({
      Arguments: {
        Organization: org
      },
      Type: 'set-selected-org'
    });
  }

  public SetSetupStep(step: ForgeInfrastructureSetupStepTypes) {
    this.Execute({
      Arguments: {
        Step: step
      },
      Type: 'set-setup-step'
    });
  }

  public SetupApplicationSeed(seed: string) {
    this.Execute({
      Arguments: {
        Seed: seed
      },
      Type: 'setup-application-seed'
    });
  }

  //  Helpers
  protected defaultValue() {
    return <ForgeInfrastructureState>{ Loading: true, DevOps: {} };
  }

  protected loadStateKey() {
    return 'main';
  }

  protected loadStateName() {
    return 'forge-infra';
  }
}
