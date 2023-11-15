import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinglePoissonPage } from './single-poisson.page';

const routes: Routes = [
  {
    path: '',
    component: SinglePoissonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinglePoissonPageRoutingModule {}
