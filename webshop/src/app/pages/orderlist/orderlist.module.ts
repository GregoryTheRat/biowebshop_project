import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderlistRoutingModule } from './orderlist-routing.module';
import { OrderlistComponent } from './orderlist.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    OrderlistComponent
  ],
  imports: [
    CommonModule,
    OrderlistRoutingModule,
    MatListModule,
    MatIconModule
  ]
})
export class OrderlistModule { }
