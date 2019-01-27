import { MatGridListModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorsComponent } from './editors.component';

@NgModule({
  declarations: [
    EditorsComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
  ],
  exports: [
    EditorsComponent
  ]
})
export class EditorsModule { }
