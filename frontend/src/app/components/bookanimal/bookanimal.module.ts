import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookanimalPageRoutingModule } from './bookanimal-routing.module';

import { BookanimalPage } from './bookanimal.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookanimalPageRoutingModule,
    Ng2SearchPipeModule,
  ],
  declarations: [BookanimalPage]
})
export class BookanimalPageModule {}
