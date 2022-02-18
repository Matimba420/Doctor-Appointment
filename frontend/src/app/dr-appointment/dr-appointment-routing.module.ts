import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrAppointmentPage } from './dr-appointment.page';

const routes: Routes = [
  {
    path: '',
    component: DrAppointmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrAppointmentPageRoutingModule {}
