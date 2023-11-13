import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../components/header/header.component';
import { ListItemComponent } from '../../components/list-item/list-item.component';

@NgModule({
  declarations: [HeaderComponent, ListItemComponent],
  imports: [CommonModule, IonicModule],
  exports: [HeaderComponent, ListItemComponent],
})
export class SharedModule {}
