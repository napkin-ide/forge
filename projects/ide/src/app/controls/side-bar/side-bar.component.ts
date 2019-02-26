import { Component, OnInit } from '@angular/core';
import { IdeSideBar, IdeSideBarSection } from 'projects/common/src/lib/core/ide/side-bar';
import { IdeStateService } from '../../svc/ide-state.service';
import { IdeStateChangeTypes, IdeStateStateManagerContext } from '@napkin-ide/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'nide-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  // Properties
  public Loading: boolean;

  public SideBar: IdeSideBar;

  //  Constructors
  constructor(protected ideState: IdeStateStateManagerContext) {
  }

  //  Life Cycle
  public ngOnInit() {
    this.ideState.Context.subscribe((ideState) => {
      this.SideBar = ideState.SideBar;

      this.Loading = ideState.Loading;

      // this.ideState.AddStatusChange('Side Bar Loaded...');
    });
  }

  //  API Methods
}
