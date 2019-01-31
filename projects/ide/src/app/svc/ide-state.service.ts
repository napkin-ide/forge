import { Injectable, Injector } from "@angular/core";
import { DAFService } from '@lcu/api';
import { IdeActivity, IdeStateChange, IdeState, IdeStateChangeTypes } from '@napkin-ide/common';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdeStateService extends DAFService {
  //  Fields
  protected state: IdeState;

  protected stateChange: BehaviorSubject<IdeStateChange>;

  //  Properties
  public StateChange: Observable<IdeStateChange>;

  //  Consturctors
  constructor(injector: Injector) {
    super(injector);

    this.state = {
      Activities: [{
        Icon: 'cloud',
        IconSet: null,
        Title: 'Infrastructure'
      }],
      CurrentActivity: null,
      StatusChanges: []
    };

    this.stateChange = new BehaviorSubject<IdeStateChange>({
      Types: [IdeStateChangeTypes.Reset],
      State: this.state
    });

    this.StateChange = this.stateChange.asObservable();
  }

  //  API Methods
  public AddStatusChange(status: string) {
    this.state.StatusChanges.push(status);

    this.sendState(IdeStateChangeTypes.Status);
  }

  public RemoveNextStatusChange() {
    if (this.state.StatusChanges.length <= 0) {
      return '';
    }

    const status = this.state.StatusChanges.shift();

    this.sendState(IdeStateChangeTypes.Status);

    return status;
  }

  public SetCurrentActivity(activity: IdeActivity) {
    this.state.CurrentActivity = activity;

    this.sendState(IdeStateChangeTypes.Activity);
  }

  public SetCurrentSideBarSectionf(activity: IdeActivity) {
    this.state.CurrentActivity = activity;

    this.sendState(IdeStateChangeTypes.Activity);
  }

  //  Helpers
  protected sendState(...types: IdeStateChangeTypes[]) {
    this.stateChange.next({
      Types: types,
      State: this.state
    });
  }
}
