import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { FathymSharedModule, LCUServiceSettings } from '@lcu-ide/common';
import { ForgePublicStateManagerContext } from './core/forge-public-state-manager.context';

@NgModule({
  declarations: [AppComponent],
  imports: [FathymSharedModule.forRoot(), BrowserModule, BrowserAnimationsModule, HttpClientModule, AppRoutingModule],
  providers: [
    {
      provide: LCUServiceSettings,
      useValue: FathymSharedModule.DefaultServiceSettings(environment)
    },
    ForgePublicStateManagerContext
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
