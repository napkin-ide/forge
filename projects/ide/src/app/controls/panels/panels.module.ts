import { MatGridListModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelsComponent } from './panels.component';

@NgModule({
  declarations: [
    PanelsComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
  ],
  exports: [
    PanelsComponent
  ]
})
export class PanelsModule { }
