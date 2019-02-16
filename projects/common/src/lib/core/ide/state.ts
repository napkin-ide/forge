import { IdeActivity } from './activity';
import { IdeSideBar, IdeSideBarSection } from './side-bar';
import { IdeEditor } from './editor';
import { IdePanel } from './panel';

export class IdeState {
  public Activities: IdeActivity[];

  public CurrentActivity: IdeActivity;

  public CurrentEditor: IdeEditor;

  public CurrentPanel: IdePanel;

  public Editors: IdeEditor[];

  public Panels: IdePanel[];

  public SideBar: IdeSideBar;

  public StatusChanges: string[];
}
