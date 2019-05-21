import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PagesRoutingModule } from './pages-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule, FathymSharedModule } from '@lcu-ide/common';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [SettingsComponent]
})
export class PagesModule {}
