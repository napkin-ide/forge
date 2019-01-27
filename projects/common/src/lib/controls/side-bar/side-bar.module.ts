import { MatGridListModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';

@NgModule({
  declarations: [
    SideBarComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
  ],
  exports: [
    SideBarComponent
  ]
})
export class SideBarModule { }
