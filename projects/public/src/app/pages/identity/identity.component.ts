import { Component, OnInit } from '@angular/core';
import { state, style } from '@angular/animations';
import { ForgePublicStateManagerContext } from '../../core/forge-public-state-manager.context';
import { ForgePublicState, ForgePublicStepTypes } from '../../core/forge-public.state';
import { RegisterModel, SignInModel } from '@lcu-ide/lcu-identity-common';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from '@napkin-ide/common';


@Component({
  selector: 'lib-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss'],
  animations: []
})
export class IdentityComponent implements OnInit {
  //  Fields

  //  Properties

  /**
   * Reconnection message
   */
  public ReconnectionMessage: string;

  public Registering: boolean;

  public State: ForgePublicState;

  public StepTypes = ForgePublicStepTypes;

  //  Constructors
  constructor(protected state: ForgePublicStateManagerContext, protected oathService: OAuthService) {
    // this.oathService.configure(authConfig);
    // this.oathService.tokenValidationHandler = new JwksValidationHandler();
    // this.oathService.loadDiscoveryDocumentAndLogin();
  }

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

    this.Registering = true;
  }

  protected setupAuthConfig(): void {

  }

  public SignIn(signIn: SignInModel) {
    //  TODO: Integrate with oidc client of some sort
    this.oathService.initImplicitFlow();
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
