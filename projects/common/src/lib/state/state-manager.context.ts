import { ObservableContextService } from '@lcu/api';
import { Observable } from 'rxjs';
import * as signalR from '@aspnet/signalr';

export class StateAction {
  public Arguments: any;

  public Type: string;
}

export abstract class StateManagerContext<T> extends ObservableContextService<T> {
  //  Fields
  protected hub: signalR.HubConnection;

  //  Constructors
  constructor() {
    super();

    this.Load();
  }

  //  API Methods
  public Execute(action: StateAction) {
    this.executeAction(action);
  }

  public Load() {
    this.hub = this.buildHub();

    this.hub
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err));

    this.hub.on('ReceiveState', req => {
      this.subject.next(req.State);
    });
  }

  //  API Methods
  protected buildHub() {
    const url = this.buildHubUrl();

    return new signalR.HubConnectionBuilder().withUrl(url).build();
  }

  protected buildHubUrl() {
    const url = this.loadHubUrl();

    const stateKey = this.loadStateKey();

    const stateName = this.loadStateName();

    return `${url}?state=${stateName}&key=${stateKey}`;
  }

  protected defaultValue(): T {
    return <T>{};
  }

  protected executeAction(action: StateAction) {
    return this.hub.invoke('ExecuteAction', { Type: action.Type, Arguments: action.Arguments });
  }

  protected abstract loadHubUrl();

  protected abstract loadStateKey();

  protected abstract loadStateName();
}
