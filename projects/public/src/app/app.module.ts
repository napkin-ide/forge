import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { FathymSharedModule } from '@lcu-ide/common';

@NgModule({
  declarations: [AppComponent],
  imports: [FathymSharedModule.forRoot(environment), BrowserModule, BrowserAnimationsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
