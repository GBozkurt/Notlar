import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KisiselPageRoutingModule } from './kisisel-routing.module';

import { KisiselPage } from './kisisel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KisiselPageRoutingModule
  ],
  declarations: [KisiselPage]
})
export class KisiselPageModule {}
