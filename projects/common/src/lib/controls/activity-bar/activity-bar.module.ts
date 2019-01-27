import { MatGridListModule, MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityBarComponent } from './activity-bar.component';

@NgModule({
  declarations: [
    ActivityBarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatTooltipModule,
  ],
  exports: [
    ActivityBarComponent
  ]
})
export class ActivityBarModule { }
