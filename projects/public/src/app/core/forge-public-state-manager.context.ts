import { ForgePublicState, ForgePublicStepTypes } from './forge-public.state';
import { StateManagerContext } from '@lcu-ide/common';
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgePublicStateManagerContext extends StateManagerContext<ForgePublicState> {
  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  API Methods
  public Register(username: string, password: string) {
    this.Execute({
      Arguments: {
        Username: username,
        Password: password
      },
      Type: 'register'
    });
  }

  public SetStep(stepType: ForgePublicStepTypes) {
    this.Execute({
      Arguments: {
        StepType: stepType
      },
      Type: 'set-step'
    });
  }

  //  Helpers
  protected defaultValue() {
    return <ForgePublicState>{ Loading: true, Step: ForgePublicStepTypes.SignIn };
  }

  protected loadStateKey() {
    return 'init';
  }

  protected loadStateName() {
    return 'lcu-identity';
  }
}
