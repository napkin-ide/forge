import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PagesRoutingModule } from './pages-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule, FathymSharedModule } from '@lcu-ide/common';
import { SettingsComponent } from './settings/settings.component';
import { CompleteComponent } from './complete/complete.component';

@NgModule({
  declarations: [CompleteComponent, SettingsComponent],
  imports: [FathymSharedModule, FormsModule, ReactiveFormsModule, PagesRoutingModule, FlexLayoutModule, MaterialModule],
  exports: [CompleteComponent, SettingsComponent],
})
export class PagesModule {

}
