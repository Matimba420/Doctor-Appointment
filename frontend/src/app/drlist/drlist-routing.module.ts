import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { DrlistPage } from './drlist.page';

const routes: Routes = [
  {
    path: '',
    component: DrlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule],
  exports: [RouterModule],
})
export class DrlistPageRoutingModule {}
