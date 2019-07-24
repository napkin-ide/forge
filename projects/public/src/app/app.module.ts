import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';
import { FathymSharedModule, LCUServiceSettings, MaterialModule } from '@lcu-ide/common';
import { ForgePublicStateManagerContext } from './core/forge-public-state-manager.context';

@NgModule({
  declarations: [AppComponent],
  imports: [
    FathymSharedModule.forRoot(),
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    OAuthModule.forRoot()
  ],
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
