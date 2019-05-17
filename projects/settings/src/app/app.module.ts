// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { IdeSettingsStateManagerContext } from './core/ide-settings-state-manager.context';
import { environment } from '../environments/environment';
import { FathymSharedModule, LCUServiceSettings } from '@lcu-ide/common';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [FathymSharedModule.forRoot(), HttpClientModule, AppRoutingModule, BrowserAnimationsModule, CommonModule],
  providers: [
    IdeSettingsStateManagerContext,
    {
      provide: LCUServiceSettings,
      useValue: FathymSharedModule.DefaultServiceSettings(environment)
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
