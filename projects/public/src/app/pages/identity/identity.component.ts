import { Component, OnInit } from '@angular/core';
import { state, style } from '@angular/animations';

@Component({
  selector: 'lib-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss'],
  animations: []
})
export class IdentityComponent implements OnInit {
  //  Fields

  //  Properties
  public State: string;

  //  Constructors
  constructor() {
    this.State = 'SignUp';
  }

  //  Life Cycle
  ngOnInit() {}

  //  API methods

  //  Helpers
}
