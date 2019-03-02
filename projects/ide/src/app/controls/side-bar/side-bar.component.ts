import { Component, OnInit } from '@angular/core';
import { IdeSideBar } from 'projects/common/src/lib/core/ide/side-bar';
import { IdeStateStateManagerContext, IdeSideBarAction } from '@napkin-ide/common';

@Component({
  selector: 'nide-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  // Properties
  public Loading: boolean;

  public SideBar: IdeSideBar;

  public SideBarSections: { Title: string; IsActive: boolean }[];

  //  Constructors
  constructor(protected ideState: IdeStateStateManagerContext) {}

  //  Life Cycle
  public ngOnInit() {
    this.ideState.Context.subscribe(ideState => {
      this.SideBar = ideState.SideBar;

      this.Loading = ideState.Loading;

      if (this.SideBar && this.SideBar.Actions) {
        const sections = this.SideBar.Actions.map(a => {
          return {
            Title: a.Section,
            IsActive:
              this.SideBar.CurrentAction &&
              this.SideBar.Actions.filter(a2 => a2.Section === a.Section).some(
                a2 => a2.Group === this.SideBar.CurrentAction.Group && a2.Action === this.SideBar.CurrentAction.Action
              )
          };
        });

        this.SideBarSections = Array.from(new Set(sections));
      }

      // this.ideState.AddStatusChange('Side Bar Loaded...');
    });
  }

  //  API Methods
  public SelectSideBarAction(action: IdeSideBarAction) {
    this.Loading = true;

    this.ideState.SelectSideBarAction(action.Action, action.Group);
  }
}
