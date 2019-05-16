import { InfrastructureState } from './infra.state';
import { StateManagerContext } from '@lcu-ide/common';
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfrastructureStateManagerContext extends StateManagerContext<InfrastructureState> {
  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  API Methods
  public AddSideBarSection(section: string) {
    this.Execute({
      Arguments: {
        Section: section
      },
      Type: 'add-side-bar-section'
    });
  }

  //  Helpers
  protected defaultValue() {
    return <InfrastructureState>{ Loading: true };
  }

  protected loadStateKey() {
    return 'main';
  }

  protected loadStateName() {
    return 'forge-infra';
  }
}
