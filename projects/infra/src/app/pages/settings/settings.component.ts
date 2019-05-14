import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IdeActivity } from '@napkin-ide/common';
import { MatSelectChange, MatListOption } from '@angular/material';
import { InfrastructureState } from '../../state/infra.state';
import { InfrastructureStateManagerContext } from '../../state/infra-state-manager.context';

@Component({
  selector: 'lcu-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations: []
})
export class SettingsComponent implements OnInit {
  //  Fields

  //  Properties
  public State: InfrastructureState;

  //  Constructors
  constructor(protected formBldr: FormBuilder, protected infraState: InfrastructureStateManagerContext) {}

  //  Life Cycle
  public ngOnInit() {
  }

  //  API methods

  //  Helpers
}
