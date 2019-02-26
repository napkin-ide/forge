import { MatGridListModule, MatTabsModule, MatIconModule, MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorsComponent } from './editors.component';

@NgModule({
  declarations: [
    EditorsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatTabsModule,
  ],
  exports: [
    EditorsComponent
  ]
})
export class EditorsModule { }
