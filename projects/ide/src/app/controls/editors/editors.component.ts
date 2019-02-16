import { Component, OnInit } from '@angular/core';
import { IdeEditor, IdeStateChangeTypes } from '@napkin-ide/common';
import { IdeStateService } from '../../svc/ide-state.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'nide-editors',
  templateUrl: './editors.component.html',
  styleUrls: ['./editors.component.scss']
})
export class EditorsComponent implements OnInit {
  // Properties
  public CurrentEditor: IdeEditor;

  public Editors: IdeEditor[];

  //  Constructors
  constructor(protected ideStateSvc: IdeStateService) {
  }

  //  Life Cycle
  public ngOnInit() {
    this.ideStateSvc.StateChange.pipe(
      filter(sc => sc.Types.some(t => t === IdeStateChangeTypes.Editor ||  t === IdeStateChangeTypes.Reset))
    ).subscribe((stateChange) => {
      this.Editors = stateChange.State.Editors;

      this.CurrentEditor = stateChange.State.CurrentEditor;

      this.ideStateSvc.AddStatusChange('Editors Loaded...');
    });
  }

  //  API Methods
}
