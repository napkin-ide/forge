import { ObservableContextService } from '@lcu/api';
import { Observable } from 'rxjs';

export class StateAction {
  public Arguments: any;

  public Type: string;
}

export class StateManagerContext<T> extends ObservableContextService<T> {
  //  Fields
  protected state: T;

  //  Constructors
  constructor() {
    super();
  }

  //  API Methods
  public Execute(action: StateAction) {
    this.executeAction(action).subscribe(newState => {
      this.subject.next(newState);
    });
  }

  //  API Methods
  protected executeAction(action: StateAction): Observable<T> {
    return Observable.create(obs => {
      obs.next({ ...this.state });

      obs.complete();
    });
  }
}
