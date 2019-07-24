import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgeInfrastructureStateManagerContext } from './state/infra-state-manager.context';
import { LCUServiceSettings, FathymSharedModule, MaterialModule } from '@lcu-ide/common';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    FathymSharedModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule],
  providers: [
    ForgeInfrastructureStateManagerContext,
    {
      provide: LCUServiceSettings,
      useValue: FathymSharedModule.DefaultServiceSettings(environment)
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
