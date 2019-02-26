import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { IdentityOptions } from '@lcu/identity';
import { HttpClientModule } from '@angular/common/http';
import { OrgRegStateManagerContext } from './core/org-reg-state-manager.context';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    OrgRegStateManagerContext
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
