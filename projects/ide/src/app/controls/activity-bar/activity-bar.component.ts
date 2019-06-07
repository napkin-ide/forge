import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { IdeActivity, ExternalDialogComponent, IdeStateStateManagerContext } from '@napkin-ide/common';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'nide-activity-bar',
  templateUrl: './activity-bar.component.html',
  styleUrls: ['./activity-bar.component.scss']
})
export class ActivityBarComponent implements OnInit {
  //  Properties
  public Activities: IdeActivity[];

  public CurrentActivity: IdeActivity;

  public InfraConfigured: boolean;

  public Loading: boolean;

  public RootActivities: IdeActivity[];

  //  Constructors
  constructor(protected ideState: IdeStateStateManagerContext, protected dialog: MatDialog) {}

  //  Life Cycle
  public ngOnInit() {
    this.ideState.Context.subscribe(ideState => {
      this.Activities = ideState.Activities;

      this.CurrentActivity = ideState.CurrentActivity;

      this.InfraConfigured = ideState.InfrastructureConfigured;

      this.Loading = ideState.Loading;

      this.RootActivities = ideState.RootActivities;

      console.log(ideState);

      if (!this.InfraConfigured) {
        this.OpenRootActivity(this.RootActivities[0]);
      }

      // this.ideState.AddStatusChange('Activities Loaded...');
    });
  }

  //  API Methods
  public OpenRootActivity(act: IdeActivity): void {
    const dialogRef = this.dialog.open(ExternalDialogComponent, {
      width: '90%',
      data: { ExternalPath: act.Lookup }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.Loading = true;

      this.ideState.$Refresh();
    });
  }

  public SelectActivity(activity: IdeActivity) {
    this.Loading = true;

    this.ideState.SetActivity(activity.Lookup);
  }
}
