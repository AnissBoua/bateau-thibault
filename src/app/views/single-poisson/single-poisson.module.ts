import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinglePoissonPageRoutingModule } from './single-poisson-routing.module';

import { SinglePoissonPage } from './single-poisson.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';
@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    SinglePoissonPageRoutingModule
  ],
  declarations: [SinglePoissonPage]
})
export class SinglePoissonPageModule {}
