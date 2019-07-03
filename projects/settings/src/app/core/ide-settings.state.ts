import { IdeActivity } from '@napkin-ide/common';


export class IdeSettingsState {
  public Activities: IdeActivity[];

  public Arch: IdeSettingsArchitechture;

  public AddNew: {
    Activity: boolean;
    LCU: boolean;
    SectionAction: boolean;
  };

  public Config: IdeSettingsConfig;

  public EditActivity: string;

  public EditSection: string;

  public EditSectionAction: string;

  public LCUSolutionOptions?: { [lcu: string]: string[] };

  public Loading?: boolean;

  public SectionActions: IdeSettingsSectionAction[];

  public SideBarEditActivity: string;

  public SideBarSections: string[];
}

export class IdeSettingsArchitechture {
  public EditLCU: string;

  public LCUs: LowCodeUnitConfig[];
}

export class IdeSettingsConfig {
  public ConfigLCU: string;

  public Files: string[];

  public LCUFiles: string[];

  public LCUSolutions: IdeSettingsConfigSolution[];

  public Solutions: IdeSettingsConfigSolution[];
}

export class IdeSettingsConfigSolution {
  public Element: string;

  public Name: string;
}

export class IdeSettingsSectionAction {
  public Action: string;

  public Group: string;

  public Name: string;
}

export class LowCodeUnitConfig {
  public Lookup: string;

  public NPMPackage: string;

  public PackageVersion: string;
}
