export class ForgePublicState {
  public AgreeToTerms: boolean;

  public Error: string;

  public Loading: boolean;

  public RedirectURL: string;

  public Step: ForgePublicStepTypes;

  public Success: boolean;
}

export enum ForgePublicStepTypes {
  SignIn = 'SignIn',
  Register = 'Register',
  ForgotPassword = 'ForgotPassword',
  Terms = 'Terms'
}
