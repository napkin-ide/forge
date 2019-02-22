import { MatExpansionModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatListModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';

@NgModule({
  declarations: [
    SideBarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
  ],
  exports: [
    SideBarComponent
  ]
})
export class SideBarModule { }
