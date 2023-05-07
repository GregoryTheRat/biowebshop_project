import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/Product';
import { OrderService } from 'src/app/shared/services/order.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-product-tabs',
  templateUrl: './product-tabs.component.html',
  styleUrls: ['./product-tabs.component.scss']
})
export class ProductTabsComponent implements OnChanges{

  @Input() pType: any;
  @Input() amount?: number

  productsArray?: Array<Product>;
  subTypes?: Array<String>;
  
  buyName?: string;
  buyAmount?: number;
  buyId?: string;
  buyCost?: number;

  constructor(private productService: ProductService, private orderService: OrderService) {
    
  }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    switch ( this.pType ) {
      case 'plant':
          this.subTypes = ['fruit', 'vegetable'];
          break;
      case 'animal':
        this.subTypes = ['dairy', 'egg', 'other'];
          break;
      case 'meat':
        this.subTypes = ['chicken', 'cow'];
          break;
      default: 
          this.subTypes = [];
          break;
   }

    this.productService.getByType(this.pType).subscribe(products => {
      this.productsArray = products;
    });
  }

  buyProduct(id: string, kg_price: number, name: string) {
    if(this.amount != undefined && this.amount > 0){
    this.buyName = name;
    this.buyId = id;
    this.buyCost = this.amount * kg_price;
    //CREATE ORDER
    const newOrder: Order = {
      id: '',
      product_name: this.buyName,
      user_id:'',
      amount: this.amount,
      cost: this.buyCost,
    }
    this.orderService.create(newOrder).then(_ => {
      console.log("Order added successfully");
    }).catch(error => {
      console.error(error);
    });
    this.amount = undefined;
    }
  }
}
