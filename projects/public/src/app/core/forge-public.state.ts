export class ForgePublicState {
  public Loading: boolean;

  public Step: ForgePublicStepTypes;
}

export enum ForgePublicStepTypes {
  SignIn,
  Register,
  ForgotPassword
}
