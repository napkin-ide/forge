import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { IdeStateService } from '../../svc/ide-state.service';
import { IdeActivity, IdeStateChangeTypes } from '@napkin-ide/common';

@Component({
  selector: 'nide-activity-bar',
  templateUrl: './activity-bar.component.html',
  styleUrls: ['./activity-bar.component.scss']
})
export class ActivityBarComponent implements OnInit {
  //  Properties
  public Activities: IdeActivity[];

  public CurrentActivity: IdeActivity;

  //  Constructors
  constructor(protected ideStateSvc: IdeStateService) {
  }

  //  Life Cycle
  public ngOnInit() {
    this.ideStateSvc.StateChange.pipe(
      filter(sc => sc.Types.some(t => t === IdeStateChangeTypes.Activity ||  t === IdeStateChangeTypes.Reset))
    ).subscribe((stateChange) => {
      this.Activities = stateChange.State.Activities;

      this.CurrentActivity = stateChange.State.CurrentActivity;
    });
  }

  //  API Methods
  public SelectActivity(activity: IdeActivity) {
    this.ideStateSvc.SetCurrentActivity(activity);
  }
}
