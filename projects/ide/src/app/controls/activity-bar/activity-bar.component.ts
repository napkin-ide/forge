import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { IdeActivity, IdeStateChangeTypes, IdeStateStateManagerContext } from '@napkin-ide/common';

@Component({
  selector: 'nide-activity-bar',
  templateUrl: './activity-bar.component.html',
  styleUrls: ['./activity-bar.component.scss']
})
export class ActivityBarComponent implements OnInit {
  //  Properties
  public Activities: IdeActivity[];

  public CurrentActivity: IdeActivity;

  public Loading: boolean;

  //  Constructors
  constructor(protected ideState: IdeStateStateManagerContext) {
  }

  //  Life Cycle
  public ngOnInit() {
    this.ideState.Context.subscribe((ideState) => {
      this.Activities = ideState.Activities;

      this.CurrentActivity = ideState.CurrentActivity;

      this.Loading = ideState.Loading;

      // this.ideState.AddStatusChange('Activities Loaded...');
    });
  }

  //  API Methods
  public SelectActivity(activity: IdeActivity) {
    this.Loading = true;

    this.ideState.SetActivity(activity.Lookup);
  }
}
