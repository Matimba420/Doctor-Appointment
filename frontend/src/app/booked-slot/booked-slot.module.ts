import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookedSlotPageRoutingModule } from './booked-slot-routing.module';

import { BookedSlotPage } from './booked-slot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookedSlotPageRoutingModule
  ],
  declarations: [BookedSlotPage]
})
export class BookedSlotPageModule {}
