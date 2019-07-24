import { OrgRegState } from './org-reg.state';
import { StateManagerContext } from '@lcu-ide/common';
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrgRegStateManagerContext extends StateManagerContext<OrgRegState> {
  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
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
    return this.Execute({
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

  protected loadStateKey() {
    return 'init';
  }

  protected loadStateName() {
    return 'org-reg';
  }
}
