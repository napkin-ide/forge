import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IdeSettingsState } from '../../core/ide-settings.state';
import { IdeSettingsStateManagerContext } from '../../core/ide-settings-state-manager.context';

@Component({
  selector: 'lcu-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations: []
})
export class SettingsComponent implements OnInit {
  //  Fields

  //  Properties
  public HostForm: FormGroup;

  public State: IdeSettingsState;

  //  Constructors
  constructor(protected formBldr: FormBuilder, protected ideSettingsState: IdeSettingsStateManagerContext) {
  }

  //  Life Cycle
  public ngOnInit() {
    this.HostForm = this.formBldr.group({
      host: ['', Validators.required],
      root: ['']
    });

    this.ideSettingsState.Context.subscribe(state => {
      this.State = state;
    });
  }

  //  API methods
  public CreateOrg() {
    this.State.Loading = true;

    this.ideSettingsState.SaveSettings();
  }

  //  Helpers
}
