import { MatGridListModule, MatTabsModule, MatButtonModule, MatIconModule, MatProgressBarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { PanelsComponent } from './panels.component';

@NgModule({
  declarations: [PanelsComponent],
  imports: [CommonModule, FlexLayoutModule, MatButtonModule, MatIconModule, MatGridListModule, MatProgressBarModule, MatTabsModule],
  exports: [PanelsComponent]
})
export class PanelsModule {}
