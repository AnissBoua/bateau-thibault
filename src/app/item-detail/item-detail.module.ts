import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemDetailPageRoutingModule } from './item-detail-routing.module';

import { ItemDetailPage } from './item-detail.page';
import { SharedModule } from "../modules/shared/shared.module";

@NgModule({
    declarations: [ItemDetailPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ItemDetailPageRoutingModule,
        SharedModule
    ]
})
export class ItemDetailPageModule {}
