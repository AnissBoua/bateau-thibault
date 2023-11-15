import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleCategoriePageRoutingModule } from './single-categorie-routing.module';

import { SingleCategoriePage } from './single-categorie.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    SingleCategoriePageRoutingModule
  ],
  declarations: [SingleCategoriePage]
})
export class SingleCategoriePageModule {}
