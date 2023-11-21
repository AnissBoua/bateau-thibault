import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoissonsPageRoutingModule } from './poissons-routing.module';

import { PoissonsPage } from './poissons.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PoissonsPageRoutingModule
  ],
  declarations: [PoissonsPage]
})
export class PoissonsPageModule {}
