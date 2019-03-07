import { IdeSettingsState } from './ide-settings.state';
import { StateManagerContext } from '@lcu-ide/common';
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdeSettingsStateManagerContext extends StateManagerContext<IdeSettingsState> {
  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  API Methods
  public SaveSettings() {
    this.Execute({
      Arguments: {
      },
      Type: 'save-settings'
    });
  }

  //  Helpers
  protected defaultValue() {
    return <IdeSettingsState>{ Loading: true };
  }

  protected loadStateKey() {
    return 'init';
  }

  protected loadStateName() {
    return 'org-reg';
  }
}
