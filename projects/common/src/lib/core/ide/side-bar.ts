export class IdeSideBar {
  public Sections: IdeSideBarSection[];

  public Title: string;
}

export class IdeSideBarSection {
  public Actions: IdeSideBarAction[];

  public Title: string;
}

export class IdeSideBarAction {
  public Action: string;

  public Group: string;

  public Title: string;
}
