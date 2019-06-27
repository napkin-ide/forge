import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { CompleteComponent } from './complete/complete.component';

const routes: Routes = [
  {
    path: 'complete',
    component: CompleteComponent
  },
  {
    path: '**',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
