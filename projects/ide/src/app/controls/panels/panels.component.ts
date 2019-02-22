import { Component, OnInit } from '@angular/core';
import { IdePanel, IdeStateChangeTypes } from '@napkin-ide/common';
import { IdeStateService } from '../../svc/ide-state.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'nide-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.scss']
})
export class PanelsComponent implements OnInit {
  // Properties
  public CurrentPanel: IdePanel;

  public Panels: IdePanel[];

  //  Constructors
  constructor(protected ideStateSvc: IdeStateService) {
  }

  //  Life Cycle
  public ngOnInit() {
    this.ideStateSvc.StateChange.pipe(
      filter(sc => sc.Types.some(t => t === IdeStateChangeTypes.Panel ||  t === IdeStateChangeTypes.Reset))
    ).subscribe((stateChange) => {
      this.Panels = stateChange.State.Panels;

      this.CurrentPanel = stateChange.State.CurrentPanel;

      this.ideStateSvc.AddStatusChange('Editors Loaded...');
    });
  }

  //  API Methods
}
