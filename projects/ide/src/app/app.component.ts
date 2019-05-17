import { Component, OnInit } from '@angular/core';
import { IdeStateStateManagerContext } from '@napkin-ide/common';

@Component({
  selector: 'nide-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Properties
  public ShowPanels: boolean;

  //  Constructors
  constructor(protected ideState: IdeStateStateManagerContext) {}

  //  Life Cycle
  public ngOnInit() {
    this.ideState.Context.subscribe(ideState => {
      this.ShowPanels = ideState.ShowPanels;

      // this.ideState.AddStatusChange('Editors Loaded...');
    });
  }
}
