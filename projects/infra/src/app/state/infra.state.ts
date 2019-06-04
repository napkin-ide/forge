export class ForgeInfrastructureState {
  public DevOps?: DevOpsState;

  public Environment?: any;

  public EnvSettings?: any;

  public Error?: string;

  public GitHub?: GitHubState;

  public InfrastructureConfigured?: boolean;

  public InfraTemplate?: InfrastructureTemplateState;

  public Loading?: boolean;

  public ProductionConfigured?: boolean;

  public SetupStep?: ForgeInfrastructureSetupStepTypes;

  public SourceControlConfigured?: boolean;
}

export class DevOpsState {
  public Configured?: boolean;
}

export class GitHubState {
  public Organizations?: any; //{ Login: string }[];

  public OrgRepos?: any; //{ Name: string, Owner: { Login: string }}[];

  public SelectedOrg?: string;
}

export class InfrastructureTemplateState {
  public SelectedTemplate?: string;
}

export enum ForgeInfrastructureSetupStepTypes {
  Azure = 'Azure',
  AWS = 'AWS',
  Custom = 'Custom'
}
