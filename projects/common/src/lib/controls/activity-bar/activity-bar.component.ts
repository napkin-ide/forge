import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';

// import { IdeStateService } from 'projects/ide-core/src/public_api';
// import { IdeStateChangeTypes } from 'projects/ide-core/src/lib/state/core/ide-state-change-types.enum';
// import { IdeActivity } from 'projects/ide-core/src/lib/state/core/ide-activity';

@Component({
  selector: 'nide-activity-bar',
  templateUrl: './activity-bar.component.html',
  styleUrls: ['./activity-bar.component.scss']
})
export class ActivityBarComponent implements OnInit {
  //  Properties
  // public Activities: IdeActivity[];

  // public CurrentActivity: IdeActivity;

  //  Constructors
  constructor() {//protected ideStateSvc: IdeStateService) {
  }

  //  Life Cycle
  public ngOnInit() {
    // this.ideStateSvc.StateChange.pipe(
    //   filter(sc => sc.Type == IdeStateChangeTypes.Activity)
    // ).subscribe((stateChange) => {
    //   this.Activities = stateChange.State.Activities;

    //   this.CurrentActivity = stateChange.State.CurrentActivity;
    // });
  }

  //  API Methods
  // public SelectActivity(activity: IdeActivity) {
  //   this.ideStateSvc.SetCurrentActivity(activity);
  // }
}
