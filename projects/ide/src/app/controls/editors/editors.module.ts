import { MatGridListModule, MatTabsModule, MatIconModule, MatButtonModule, MatProgressBarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyElementModule } from '@lowcodeunit/lazy-element';
import { EditorsComponent } from './editors.component';

@NgModule({
  declarations: [EditorsComponent],
  imports: [CommonModule, LazyElementModule, MatButtonModule, MatGridListModule, MatIconModule, MatProgressBarModule, MatTabsModule],
  exports: [EditorsComponent]
})
export class EditorsModule {}
