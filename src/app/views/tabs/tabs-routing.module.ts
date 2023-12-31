import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then((m) => m.HomePageModule),
          },
        ],
      },
      {
        path: 'list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../list/list.module').then((m) => m.ListPageModule),
          },
        ],
      },
      {
        path: 'contact',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../contact/contact.module').then(
                (m) => m.ContactPageModule
              ),
          },
        ],
      },
      {
        path: 'poisson',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../poissons/poissons.module').then(
                (m) => m.PoissonsPageModule
              ),
          },
        ],
      },
      {
        path: 'single-categorie',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../single-categorie/single-categorie.module').then(
                (m) => m.SingleCategoriePageModule
              ),
          },
        ],
      },
      {
        path: 'single-poisson',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../single-poisson/single-poisson.module').then(
                (m) => m.SinglePoissonPageModule
              ),
          },
        ],
      },
      {
        path: 'item-detail',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../item-detail/item-detail.module').then(
                (m) => m.ItemDetailPageModule
              ),
          },
        ],
      },
      {
        path: 'panier',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../panier/panier.module').then((m) => m.PanierPageModule),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
