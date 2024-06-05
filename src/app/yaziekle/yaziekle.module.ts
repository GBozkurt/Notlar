import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YazieklePageRoutingModule } from './yaziekle-routing.module';

import { YazieklePage } from './yaziekle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YazieklePageRoutingModule
  ],
  declarations: [YazieklePage]
})
export class YazieklePageModule {}
