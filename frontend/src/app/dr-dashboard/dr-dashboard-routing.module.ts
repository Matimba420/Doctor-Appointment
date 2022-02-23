import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrDashboardPage } from './dr-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DrDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrDashboardPageRoutingModule {}
