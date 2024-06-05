import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YazieklePage } from './yaziekle.page';

const routes: Routes = [
  {
    path: '',
    component: YazieklePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YazieklePageRoutingModule {}
