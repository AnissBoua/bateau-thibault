import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleCategoriePage } from './single-categorie.page';

const routes: Routes = [
  {
    path: '',
    component: SingleCategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleCategoriePageRoutingModule {}
