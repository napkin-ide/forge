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

  public CommitInfrastructure(template: string) {
    this.Execute({
      Arguments: {
        Template: template
      },
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

  public SetupDevOpsOAuth(appId: string, scopes: string, clientSecret: string) {
    this.Execute({
      Arguments: {
        AppID: appId,
        Scopes: scopes,
        ClientSecret: clientSecret
      },
      Type: 'setup-dev-ops-o-auth'
    });
  }

  public SetupGitHubOAuth(clientId: string, clientSecret: string) {
    this.Execute({
      Arguments: {
        ClientID: clientId,
        ClientSecret: clientSecret
      },
      Type: 'setup-git-hub-o-auth'
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
