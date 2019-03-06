import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { IdentityOptions } from '@lcu/identity';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule, MatGridListModule } from '@angular/material';
import { ActivityBarModule } from './controls/activity-bar/activity-bar.module';
import { EditorsModule } from './controls/editors/editors.module';
import { IdeBarModule } from './controls/ide-bar/ide-bar.module';
import { PanelsModule } from './controls/panels/panels.module';
import { SideBarModule } from './controls/side-bar/side-bar.module';
import { StatusBarModule } from './controls/status-bar/status-bar.module';
import { IdeStateService } from './svc/ide-state.service';
import { IdeStateStateManagerContext } from '@napkin-ide/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LCUServiceSettings, RealTimeService } from '@lcu-ide/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ActivityBarModule,
    EditorsModule,
    IdeBarModule,
    PanelsModule,
    SideBarModule,
    StatusBarModule,
    MatGridListModule,
    MatSidenavModule
  ],
  providers: [
    RealTimeService,
    {
      provide: LCUServiceSettings,
      useValue: <LCUServiceSettings>{
        APIRoot: `http://localhost:52235`
        // APIRoot: `http://www.lowcodeunit.com`,
        // APIRoot: `http://5280.lowcodeunit.com`,
        // APIRoot: ``,
      }
    },
    IdeStateService,
    IdeStateStateManagerContext
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
