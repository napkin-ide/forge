import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatGridListModule, MatSidenavModule } from '@angular/material';
import { ForgeSignInModule, ForgeRegisterModule } from '@lcu/identity';
import { IdentityComponent } from './identity/identity.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [IdentityComponent],
  imports: [
    CommonModule,
    CommonModule,
    ForgeSignInModule,
    ForgeRegisterModule,
    PagesRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
  ],
  exports: [IdentityComponent]
})
export class PagesModule { }
