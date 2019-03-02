import { Injectable, Injector } from '@angular/core';
import { StateManagerContext } from '@lcu-ide/common';
import { IdeState } from './state';

@Injectable({
  providedIn: 'root'
})
export class IdeStateStateManagerContext extends StateManagerContext<IdeState> {
  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  API Methods
  public RemoveEditor(editorLookup: string) {
    this.Execute({
      Arguments: {
        EditorLookup: editorLookup
      },
      Type: 'remove-editor'
    });
  }

  public SelectEditor(editorLookup: string) {
    this.Execute({
      Arguments: {
        EditorLookup: editorLookup
      },
      Type: 'select-editor'
    });
  }

  public SelectSideBarAction(action: string, group: string) {
    this.Execute({
      Arguments: {
        Action: action,
        Group: group
      },
      Type: 'select-side-bar-action'
    });
  }

  public SetActivity(activity: string) {
    this.Execute({
      Arguments: {
        Activity: activity
      },
      Type: 'set-activity'
    });
  }

  //  Helpers
  protected defaultValue() {
    return <IdeState>{ Loading: true };
  }

  protected async loadStateKey() {
    return 'main';
  }

  protected async loadStateName() {
    return 'ide-state';
  }
}
