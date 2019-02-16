import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'lcu-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.scss'],
  animations: []
})
export class OrgComponent implements OnInit {
  //  Fields

  //  Properties
  public HostForm: FormGroup;

  public NewForm: FormGroup;

  public State: string;

  //  Constructors
  constructor(protected formBldr: FormBuilder) {
    this.HostForm = this.formBldr.group({
      host: ['', Validators.required]
    });

    this.NewForm = this.formBldr.group({
      name: ['', Validators.required],
      desc: ['', Validators.required]
    });

    this.State = 'New';
  }

  //  Life Cycle
  ngOnInit() {}

  //  API methods

  //  Helpers
}
