import { Component, OnInit } from '@angular/core';
import { IdeSideBar, IdeSideBarSection } from 'projects/common/src/lib/core/ide/side-bar';
import { IdeStateService } from '../../svc/ide-state.service';
import { IdeStateChangeTypes } from '@napkin-ide/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'nide-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  // Properties
  public SideBar: IdeSideBar;

  //  Constructors
  constructor(protected ideStateSvc: IdeStateService) {
  }

  //  Life Cycle
  public ngOnInit() {
    this.ideStateSvc.StateChange.pipe(
      filter(sc => sc.Types.some(t => t === IdeStateChangeTypes.SideBar ||  t === IdeStateChangeTypes.Reset))
    ).subscribe((stateChange) => {
      this.SideBar = stateChange.State.SideBar;

      this.ideStateSvc.AddStatusChange('Side Bar Loaded...');
    });
  }

  //  API Methods
}
