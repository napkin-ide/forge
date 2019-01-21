import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IdentityOptions } from '@lcu/identity';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: IdentityOptions,
      useValue: <IdentityOptions>{
        ConfirmPasswordRecoveryURL: `/daf-identity/recover/confirm`,
        IsAuthenticatedURL: `/daf-identity/authenticated`,
        IsRegisteredPasswordQueryParamName: `password`,
        IsRegisteredUserQueryParamName: `email`,
        IsRegisteredURL: `/daf-identity/registered`,
        RecoverPasswordURL: `/daf-identity/recover/init`,
        RegisterURL: `/daf-identity/register`,
        SignInURL: `/daf-identity/signin`,
        SignOutURL: `/daf-identity/signout`
      }
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
