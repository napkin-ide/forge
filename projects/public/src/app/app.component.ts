import { Component, OnInit } from '@angular/core';
import { ForgePublicStateManagerContext } from './core/forge-public-state-manager.context';
import { ForgePublicState } from './core/forge-public.state';

@Component({
  selector: 'lib-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public State: ForgePublicState;

  constructor(protected state: ForgePublicStateManagerContext) {

  }

  public ngOnInit(): void {
    this.state.Context.subscribe(state => {
      this.State = state;
      console.log('app', state);
    });
  }
}
