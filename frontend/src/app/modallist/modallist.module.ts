import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModallistPageRoutingModule } from './modallist-routing.module';

import { ModallistPage } from './modallist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModallistPageRoutingModule
  ],
  declarations: [ModallistPage]
})
export class ModallistPageModule {}
