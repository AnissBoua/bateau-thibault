import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./views/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./views/contact/contact.module').then((m) => m.ContactPageModule),
  },
  {
    path: 'panier',
    loadChildren: () =>
      import('./views/panier/panier.module').then((m) => m.PanierPageModule),
  },
  {
    path: 'item-detail',
    loadChildren: () =>
      import('./views/item-detail/item-detail.module').then(
        (m) => m.ItemDetailPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
