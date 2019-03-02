import { MatGridListModule, MatTabsModule, MatButtonModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelsComponent } from './panels.component';

@NgModule({
  declarations: [
    PanelsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatTabsModule,
  ],
  exports: [
    PanelsComponent
  ]
})
export class PanelsModule { }
