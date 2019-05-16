import { Component, OnInit, OnChanges } from '@angular/core';
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

  public HostValid: boolean;

  public State: OrgRegState;

  public StateLoading: boolean;

  public Subdomain: string;

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

    this.HostValid = false;
  }

  //  Life Cycle
  public ngOnInit() {
    this.orgRegState.Context.subscribe(state => {
      this.State = state;
    });
  }

  public onChanges() {
    this.HostValid = false;

    if (!this.StateLoading)
      this.State.HostApprovalMessage = '';
    
    var host = this.HostForm.controls['host'].value;

    if (this.State.HostFlow == 'private' && host && host.split('.').length >= 3) {
      this.HostValid = true;
      this.Subdomain = host.split('.')[0];
    }
    else if (this.State.HostFlow == 'shared' && host && host.length > 0) {
      this.HostValid = true;
    }

    this.StateLoading = false;
  }
  

  //  API methods
  public CreateOrg() {
    this.State.Loading = true;

    this.orgRegState.CreateOrg(this.NewForm.controls['name'].value, this.NewForm.controls['desc'].value);
  }

  public SecureHost() {
    this.State.Loading = true;
    this.StateLoading = true;

    if (this.State.HostFlow === 'private') {      
      this.orgRegState.SecureHost(this.HostForm.controls['host'].value);
    } else if (this.State.HostFlow === 'shared') {
      this.orgRegState.SecureHost(`${this.HostForm.controls['host'].value}.${this.HostForm.controls['root'].value}`);
    }
  }

  public SetHostFlow(flow: string) {
    this.HostForm.reset();

    this.State.Loading = true;

    this.orgRegState.SetHostFlow(flow);
  }

  //  Helpers
}
