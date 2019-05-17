import {
  MatGridListModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatProgressBarModule,
  MatDialogModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  import { ExternalDialogModule } from '@napkin-ide/common';
  import { ActivityBarComponent } from './activity-bar.component';

@NgModule({
  declarations: [ActivityBarComponent],
  imports: [
    CommonModule,
    ExternalDialogModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatDialogModule,
    MatProgressBarModule,
    MatTooltipModule
  ],
  exports: [ActivityBarComponent]
})
export class ActivityBarModule {}
