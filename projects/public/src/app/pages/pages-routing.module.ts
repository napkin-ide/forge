import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdentityComponent } from './identity/identity.component';

const routes: Routes = [
  {
    path: '**',
    loadChildren: './marketing/marketing.module#MarketingModule'
  }
  // {
  //   path: '',
  //   component: IdentityComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
