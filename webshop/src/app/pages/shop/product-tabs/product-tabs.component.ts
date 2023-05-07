import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/Product';
import { ProductService } from 'src/app/shared/services/product.service';

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
  
  buyAmount?: number;
  buyId?: string;
  buyCost?: number;

  constructor(private productService: ProductService) {
    
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

  buyProduct(id: string, kg_price: number) {
    if(this.amount != undefined && this.amount > 0){
    this.buyId = id;
    this.buyCost = this.amount * kg_price;
    //CREATE ORDER
    console.log("buying: " + this.buyId + ' ' + this.amount + ' ' + this.buyCost + ' $');
    this.amount = undefined;
    }
  }
}
