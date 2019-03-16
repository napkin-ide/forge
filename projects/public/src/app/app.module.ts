import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RealTimeService, LCUServiceSettings } from '@lcu-ide/common';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, AppRoutingModule],
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
