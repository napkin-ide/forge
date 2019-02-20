export class IdeSideBar {
  public CurrentSection?: IdeSideBarSection;

  public Sections: IdeSideBarSection[];

  public Title: string;
}

export class IdeSideBarSection {
  public Actions: IdeSideBarAction[];

  public CurrentAction?: IdeSideBarAction;

  public FindNewText: string;

  public Title: string;
}

export class IdeSideBarAction {
  public Action: string;

  public Group: string;

  public Title: string;
}