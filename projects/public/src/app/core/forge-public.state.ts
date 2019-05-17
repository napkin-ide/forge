export class ForgePublicState {
  public Loading: boolean;

  public Step: ForgePublicStepTypes;
}

export enum ForgePublicStepTypes {
  SignIn = 'SignIn',
  Register = 'Register',
  ForgotPassword = 'ForgotPassword'
}
