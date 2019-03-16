import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { IdeSettingsStateManagerContext } from './core/ide-settings-state-manager.context';
import { RealTimeService, LCUServiceSettings } from '@lcu-ide/common';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [
    RealTimeService,
    {
      provide: LCUServiceSettings,
      useValue: <LCUServiceSettings>{
        APIRoot: environment.production ? `` :
         `http://localhost:52235`
        // `http://www.lowcodeunit.com`,
        // `http://5280.lowcodeunit.com`,
        // ``,
      }
    },
    IdeSettingsStateManagerContext
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
