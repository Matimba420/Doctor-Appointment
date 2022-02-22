import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrlistPageRoutingModule } from './drlist-routing.module';

import { DrlistPage } from './drlist.page';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrlistPageRoutingModule
  ],
  declarations: [DrlistPage]
})
export class DrlistPageModule {}
