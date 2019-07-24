import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LcuIdentityModule } from '@lcu-ide/lcu-identity-common';
import { IdentityComponent } from './identity/identity.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FathymSharedModule, MaterialModule } from '@lcu-ide/common';

@NgModule({
  declarations: [IdentityComponent],
  imports: [
    FathymSharedModule,
    MaterialModule,
    PagesRoutingModule,
    LcuIdentityModule,
    FlexLayoutModule
  ],
  exports: [IdentityComponent]
})
export class PagesModule {}
