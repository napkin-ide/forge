import { FlexLayoutModule } from '@angular/flex-layout';
// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';
import { FathymSharedModule, LCUServiceSettings } from '@lcu-ide/common';
import { ForgePublicStateManagerContext } from './core/forge-public-state-manager.context';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [AppComponent],
  imports: [FathymSharedModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    OAuthModule.forRoot(),
    MatProgressSpinnerModule],
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
