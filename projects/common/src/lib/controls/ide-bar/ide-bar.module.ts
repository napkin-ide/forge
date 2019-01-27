import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeBarComponent } from './ide-bar.component';
import { MatToolbarModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    IdeBarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  exports: [
    IdeBarComponent
  ]
})
export class IdeBarModule { }
