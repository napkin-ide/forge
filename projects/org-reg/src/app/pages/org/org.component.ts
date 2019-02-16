import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrgRegState } from '../../core/org-reg.state';
import { OrgRegStateManagerContext } from '../../core/org-reg-state-manager.context';

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

  public State: OrgRegState;

  //  Constructors
  constructor(protected formBldr: FormBuilder, protected orgRegState: OrgRegStateManagerContext) {
    this.HostForm = this.formBldr.group({
      host: ['', Validators.required],
      root: ['']
    });

    this.NewForm = this.formBldr.group({
      name: ['', Validators.required],
      desc: ['', Validators.required]
    });
  }

  //  Life Cycle
  public ngOnInit() {
    this.orgRegState.Context.subscribe(state => {
      this.State = state;
    });
  }

  //  API methods
  public CreateOrg() {
    this.orgRegState.CreateOrg(this.NewForm.controls['name'].value, this.NewForm.controls['desc'].value);
  }

  public SecureHost() {
    if (this.State.HostFlow === 'private') {
      this.orgRegState.SecureHost(this.HostForm.controls['host'].value);
    } else if (this.State.HostFlow === 'shared') {
      this.orgRegState.SecureHost(`${this.HostForm.controls['host'].value}.${this.HostForm.controls['root'].value}`);
    }
  }

  public SetHostFlow(flow: string) {
    this.orgRegState.SetHostFlow(flow);
  }

  //  Helpers
}
