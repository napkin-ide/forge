import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';
import { LcuIdentityModule } from '@lcu-ide/lcu-identity-common';
import { IdentityComponent } from './identity/identity.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [IdentityComponent],
  imports: [CommonModule, LcuIdentityModule, PagesRoutingModule, FlexLayoutModule, MatButtonModule],
  exports: [IdentityComponent]
})
export class PagesModule {}
