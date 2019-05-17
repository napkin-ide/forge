import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalDialogComponent } from './external-dialog.component';
import { MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [ExternalDialogComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [ExternalDialogComponent],
  entryComponents: [ExternalDialogComponent]
})
export class ExternalDialogModule {}
