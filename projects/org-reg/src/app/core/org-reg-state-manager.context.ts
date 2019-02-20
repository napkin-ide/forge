import { OrgRegState } from './org-reg.state';
import { StateManagerContext } from '@lcu-ide/common';

export class OrgRegStateManagerContext extends StateManagerContext<OrgRegState> {
  //  Properties

  //  Constructors
  constructor() {
    super();
  }

  //  API Methods
  public CreateOrg(name: string, description: string) {
    this.Execute({
      Arguments: {
        Name: name,
        Description: description
      },
      Type: 'create-org'
    });
  }

  public SecureHost(host: string) {
    this.Execute({
      Arguments: {
        Host: host
      },
      Type: 'secure-host'
    });
  }

  public SetHostFlow(hostFlow: string) {
    this.Execute({
      Arguments: {
        HostFlow: hostFlow
      },
      Type: 'set-host-flow'
    });
  }

  //  Helpers
  protected defaultValue() {
    return <OrgRegState>{ Loading: true };
  }

  protected loadHubUrl() {
    // return '/state';
    // return 'http://www.lowcodeunit.com/state';
    return 'http://localhost:52235/state';
  }

  protected loadStateKey() {
    return 'test';
  }

  protected loadStateName() {
    return 'org-reg';
  }
}
