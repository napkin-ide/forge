import { OrgRegState } from './org-reg.state';
import { StateManagerContext, StateAction } from '@napkin-ide/common';
import { Observable } from 'rxjs';

export class OrgRegStateManagerContext extends StateManagerContext<OrgRegState> {
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
  protected defaultValue(): OrgRegState {
    return (this.state = {
      Step: 'New'
    });
  }

  protected executeAction(action: StateAction) {
    //  Temp... To be moved to server
    return Observable.create(obs => {
      this.state.Loading = true;

      obs.next(this.state);

      setTimeout(() => {
        switch (action.Type) {
          case 'create-org':
            this.state.OrganizationName = action.Arguments.Name;

            this.state.OrganizationDescription = action.Arguments.Description;

            this.state.Step = 'Host';
            break;

          case 'secure-host':
            this.state.Host = action.Arguments.Host;

            this.state.Provisioning =
              'Sit back and relax while we provision your new organization forge. This will configure things to run at the above domain.';

            this.state.Step = 'Provisioning';
            break;

          case 'set-host-flow':
            this.state.HostFlow = action.Arguments.HostFlow;
            break;
        }

        this.state.Loading = false;

        obs.next(this.state);

        obs.complete();
      }, 750);
    });
  }
}
