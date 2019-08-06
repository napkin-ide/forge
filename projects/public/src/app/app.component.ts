import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {
    location.href = 'http://fathym.com';
  }
}
