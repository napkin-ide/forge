export class OrgRegState {
  public Host?: string;

  public HostFlow?: 'shared' | 'private';

  public HostApprovalMessage?: string;

  public Loading?: boolean;

  public OrganizationName?: string;

  public OrganizationDescription?: string;

  public Provisioning?: string;

  public Step: 'New' | 'Host' | 'Provisioning';

  public Subdomain: string;
}
