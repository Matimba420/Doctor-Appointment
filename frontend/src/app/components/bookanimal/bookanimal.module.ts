import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookanimalPageRoutingModule } from './bookanimal-routing.module';

import { BookanimalPage } from './bookanimal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookanimalPageRoutingModule
  ],
  declarations: [BookanimalPage]
})
export class BookanimalPageModule {}
