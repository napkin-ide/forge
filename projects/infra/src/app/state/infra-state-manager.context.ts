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

  public SetSetupStep(step: ForgeInfrastructureSetupStepTypes) {
    this.Execute({
      Arguments: {
        Step: step
      },
      Type: 'set-setup-step'
    });
  }

  //  Helpers
  protected defaultValue() {
    return <ForgeInfrastructureState>{ Loading: true };
  }

  protected loadStateKey() {
    return 'main';
  }

  protected loadStateName() {
    return 'forge-infra';
  }
}
