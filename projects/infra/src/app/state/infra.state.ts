export class ForgeInfrastructureState {
  public InfrastructureConfigured?: boolean;

  public Loading?: boolean;

  public SetupStep?: ForgeInfrastructureSetupStepTypes;
}

export enum ForgeInfrastructureSetupStepTypes {
  Azure = 'Azure',
  AWS = 'AWS',
  Custom = 'Custom'
}
