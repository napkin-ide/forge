import { Component, OnInit } from '@angular/core';
import { state, style } from '@angular/animations';
import { ForgePublicStateManagerContext } from '../../core/forge-public-state-manager.context';
import { ForgePublicState, ForgePublicStepTypes } from '../../core/forge-public.state';
import { RegisterModel, SignInModel } from '@lcu-ide/lcu-identity-common';

@Component({
  selector: 'lib-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss'],
  animations: []
})
export class IdentityComponent implements OnInit {
  //  Fields

  //  Properties
  public ReconnectionMessage: string;

  public State: ForgePublicState;

  public StepTypes = ForgePublicStepTypes;

  //  Constructors
  constructor(protected state: ForgePublicStateManagerContext) { }

  //  Life Cycle
  ngOnInit() {

    this.state.ReconnectionAttempt.subscribe((val: boolean) => {
      this.connectionError(val);
    });

    this.state.Context.subscribe(state => {
      this.State = state;
    });
  }

  //  API methods
  public Register(reg: RegisterModel) {
    this.State.Loading = true;

    this.state.Register(reg.Username, reg.Password);
  }

  public SignIn(signIn: SignInModel) {
    //  TODO: Integrate with oidc client of some sort
  }

  public SetStep(stepType: ForgePublicStepTypes) {
    this.State.Loading = true;

    this.state.SetStep(stepType);
  }

  //  Helpers
  protected connectionError(val: boolean): void {
    const connectMessage: string = 'Connection attempt, ';
    this.ReconnectionMessage = (val) ? connectMessage + 'reconnecting' : connectMessage + 'disconnected';
  }
}
