import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrAppointmentPageRoutingModule } from './dr-appointment-routing.module';

import { DrAppointmentPage } from './dr-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrAppointmentPageRoutingModule
  ],
  declarations: [DrAppointmentPage]
})
export class DrAppointmentPageModule {}
