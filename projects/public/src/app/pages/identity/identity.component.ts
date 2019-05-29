import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { state, style } from '@angular/animations';
import { ForgePublicStateManagerContext } from '../../core/forge-public-state-manager.context';
import { ForgePublicState, ForgePublicStepTypes } from '../../core/forge-public.state';
import { RegisterModel, SignInModel, TermsConditionsModel } from '@lcu-ide/lcu-identity-common';
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

  public TermsChecked: boolean;

  /**
   * Reconnection message
   */
  public ReconnectionMessage: string;

  public Registering: boolean;

  public State: ForgePublicState;

  public StepTypes = ForgePublicStepTypes;

  public TermsConditionsConfig: Array<TermsConditionsModel>;

  public TermsTitle: string;

  public TermsSubTitle: string;

  //  Constructors
  constructor(protected state: ForgePublicStateManagerContext, protected oathService: OAuthService) {
    // this.oathService.configure(authConfig);
    // this.oathService.tokenValidationHandler = new JwksValidationHandler();
    // this.oathService.loadDiscoveryDocumentAndLogin();

    this.setupTerms();
  }

  //  Life Cycle
  ngOnInit() {

    this.state.ReconnectionAttempt.subscribe((val: boolean) => {
      this.connectionError(val);
    });

    this.state.Context.subscribe(state => {
      this.State = state;

      this.stateUpdate();
    });

  }

  //  API methods
  public Register(reg: RegisterModel) {
    this.State.Loading = true;

    this.state.Register(reg.Username, reg.Password, reg.TermsAccepted);

    this.Registering = true;
  }

  protected setupAuthConfig(): void {

  }

  public SignIn(signIn: SignInModel) {
    //  TODO: Integrate with oidc client of some sort
    this.oathService.initImplicitFlow();
  }

  /**
   * 
   * @param stepType showing components
   */
  public SetStep(stepType: ForgePublicStepTypes) {
    this.State.Loading = true;

    this.state.SetStep(stepType);
  }

  /**
   * 
   * @param evt agreeing to terms
   */
  public AgreeToTerms(evt: boolean): void {
    this.State.Loading = true;

   this.state.AgreeToTerms(evt);
  }

  //  Helpers
  protected connectionError(val: boolean): void {
    const connectMessage: string = 'Connection attempt, ';
    this.ReconnectionMessage = (val) ? connectMessage + 'reconnecting' : connectMessage + 'disconnected';
  }

  /**
   * Handle state changes
   */
  protected stateUpdate(): void {

    if (this.State.AgreeToTerms) {
      this.agreeToTermsUpdate();
    }

    if (this.State.RedirectURL) {
      location.href = this.State.RedirectURL;
    }
  }

  /**
   * Handle agree to terms change
   */
  protected agreeToTermsUpdate(): void {
    // need a delay so the component is available; would prefer to not use a setTimeout
    setTimeout(() => {
      this.TermsChecked = this.State.AgreeToTerms;
    }, 500);
  }

  /**
   * Setting up terms
   */
  protected setupTerms(): void {
    this.TermsTitle = 'Agree to terms and conditions';
    this.TermsSubTitle = 'You must agree to terms and conditions to register';

    this.TermsConditionsConfig = new Array<TermsConditionsModel>();

    this.TermsConditionsConfig.push(
      {Term: 'Testing Term One', Condition: 'Condition for testing term one'},
      {Term: 'Testing Term Two', Condition: 'Condition for testing term two'},
      {Term: 'Testing Term Three', Condition: 'Condition for testing term three'});
  }
}
