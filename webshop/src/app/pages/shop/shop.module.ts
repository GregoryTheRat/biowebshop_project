import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { ProductTabsComponent } from './product-tabs/product-tabs.component';


@NgModule({
  declarations: [
    ShopComponent,
    ProductTabsComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MatMenuModule,
    MatTabsModule
  ]
})
export class ShopModule { }
