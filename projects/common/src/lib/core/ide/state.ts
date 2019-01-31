import { IdeActivity } from './activity';
import { IdeSideBar, IdeSideBarSection } from './side-bar';

export class IdeState {
  public Activities: IdeActivity[];

  public CurrentActivity: IdeActivity;

  public SideBar: IdeSideBar;

  public StatusChanges: string[];
}
