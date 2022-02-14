import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModallistPage } from './modallist.page';

const routes: Routes = [
  {
    path: '',
    component: ModallistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModallistPageRoutingModule {}
