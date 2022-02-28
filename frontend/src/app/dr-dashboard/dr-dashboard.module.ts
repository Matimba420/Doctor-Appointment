import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrDashboardPageRoutingModule } from './dr-dashboard-routing.module';

import { DrDashboardPage } from './dr-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrDashboardPageRoutingModule
  ],
  declarations: [DrDashboardPage]
})
export class DrDashboardPageModule {}
