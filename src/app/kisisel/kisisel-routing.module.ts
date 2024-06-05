import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KisiselPage } from './kisisel.page';

const routes: Routes = [
  {
    path: '',
    component: KisiselPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KisiselPageRoutingModule {}
