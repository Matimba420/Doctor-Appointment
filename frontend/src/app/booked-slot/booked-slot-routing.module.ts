import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookedSlotPage } from './booked-slot.page';

const routes: Routes = [
  {
    path: '',
    component: BookedSlotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookedSlotPageRoutingModule {}
