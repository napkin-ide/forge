import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { MarketingRoutingModule } from './marketing-routing.module';
import { FathymSharedModule, MaterialModule } from '@lcu-ide/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [OverviewComponent],
  imports: [FathymSharedModule, MaterialModule, FlexLayoutModule, MarketingRoutingModule],
  exports: [OverviewComponent]
})
export class MarketingModule {}
