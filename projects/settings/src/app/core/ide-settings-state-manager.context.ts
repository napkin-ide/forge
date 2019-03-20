import { IdeSettingsState, LowCodeUnitConfig, IdeSettingsConfigSolution, IdeSettingsSectionAction } from './ide-settings.state';
import { StateManagerContext } from '@lcu-ide/common';
import { Injectable, Injector } from '@angular/core';
import { IdeActivity } from '@napkin-ide/common';

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
  public AddSideBarSection(activityLookup: string, section: string) {
    this.Execute({
      Arguments: {
        Activity: activityLookup,
        Section: section
      },
      Type: 'add-side-bar-section'
    });
  }

  public DeleteActivity(activityLookup: string) {
    this.Execute({
      Arguments: {
        Activity: activityLookup
      },
      Type: 'delete-activity'
    });
  }

  public DeleteLCU(lcuLookup: string) {
    this.Execute({
      Arguments: {
        LCU: lcuLookup
      },
      Type: 'delete-lcu'
    });
  }

  public DeleteSectionAction(action: string, group: string) {
    this.Execute({
      Arguments: {
        Action: action,
        Group: group
      },
      Type: 'delete-section-action'
    });
  }

  public DeleteSideBarSection(activityLookup: string, section: string) {
    this.Execute({
      Arguments: {
        Activity: activityLookup,
        Section: section
      },
      Type: 'delete-side-bar-section'
    });
  }

  public SaveActivity(activity: IdeActivity) {
    this.Execute({
      Arguments: {
        Activity: activity
      },
      Type: 'save-activity'
    });
  }

  public SaveLCU(lcu: LowCodeUnitConfig) {
    this.Execute({
      Arguments: {
        LCU: lcu
      },
      Type: 'save-lcu'
    });
  }

  public SaveLCUCapabilities(lcuLookup: string, files: string[], solutions: IdeSettingsConfigSolution[]) {
    this.Execute({
      Arguments: {
        Files: files,
        LCU: lcuLookup,
        Solutions: solutions
      },
      Type: 'save-lcu-capabilities'
    });
  }

  public SaveSectionAction(action: IdeSettingsSectionAction) {
    this.Execute({
      Arguments: {
        Action: action
      },
      Type: 'save-section-action'
    });
  }

  public SetConfigLCU(lcuLookup: string) {
    this.Execute({
      Arguments: {
        LCU: lcuLookup
      },
      Type: 'set-config-lcu'
    });
  }

  public SetEditActivity(activityLookup: string) {
    this.Execute({
      Arguments: {
        Activity: activityLookup
      },
      Type: 'set-edit-activity'
    });
  }

  public SetEditLCU(lcuLookup: string) {
    this.Execute({
      Arguments: {
        LCU: lcuLookup
      },
      Type: 'set-edit-lcu'
    });
  }

  public SetEditSection(sectionLookup: string) {
    this.Execute({
      Arguments: {
        Section: sectionLookup
      },
      Type: 'set-edit-section'
    });
  }

  public SetEditSectionAction(action: string) {
    this.Execute({
      Arguments: {
        Action: action
      },
      Type: 'set-edit-section-action'
    });
  }

  public SetSideBarEditActivity(activityLookup: string) {
    this.Execute({
      Arguments: {
        Activity: activityLookup
      },
      Type: 'set-side-bar-edit-activity'
    });
  }

  public ToggleAddNewActivity() {
    this.Execute({
      Arguments: {},
      Type: 'toggle-add-new-activity'
    });
  }

  public ToggleAddNewLCU() {
    this.Execute({
      Arguments: {},
      Type: 'toggle-add-new-lcu'
    });
  }

  public ToggleAddNewSectionAction() {
    this.Execute({
      Arguments: {},
      Type: 'toggle-add-new-section-action'
    });
  }

  //  Helpers
  protected defaultValue() {
    return <IdeSettingsState>{ Loading: true };
  }

  protected loadStateKey() {
    return 'main';
  }

  protected loadStateName() {
    return 'ide-settings';
  }
}