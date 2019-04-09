import { Component, OnInit } from '@angular/core';
import { state, style } from '@angular/animations';
import { ForgePublicStateManagerContext } from '../../core/forge-public-state-manager.context';
import { ForgePublicState, ForgePublicStepTypes } from '../../core/forge-public.state';
import { RegisterModel } from '@lcu-ide/lcu-identity-common';

@Component({
  selector: 'lib-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss'],
  animations: []
})
export class IdentityComponent implements OnInit {
  //  Fields

  //  Properties
  public State: ForgePublicState;

  public StepTypes = ForgePublicStepTypes;

  //  Constructors
  constructor(protected state: ForgePublicStateManagerContext) {}

  //  Life Cycle
  ngOnInit() {
    this.state.Context.subscribe(state => {
      this.State = state;
    });
  }

  //  API methods
  public Register(reg: RegisterModel) {
    this.State.Loading = true;

    this.state.Register(reg.Username, reg.Password);
  }

  public SetStep(stepType: ForgePublicStepTypes) {
    this.State.Loading = true;

    this.state.SetStep(stepType);
  }

  //  Helpers
}
