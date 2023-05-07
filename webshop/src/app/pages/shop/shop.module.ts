import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ProductTabsComponent } from './product-tabs/product-tabs.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    ShopComponent,
    ProductTabsComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MatTabsModule,
    MatSelectModule,
    FormsModule,
    MatCardModule
  ]
})
export class ShopModule { }
