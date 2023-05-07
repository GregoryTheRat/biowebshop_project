import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../shared/models/Product';
import { ProductService } from '../../shared/services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnChanges{

  constructor() {}

  @Input() selected?: string;

  

  ngOnChanges(changes: SimpleChanges): void {
      
  }

  pTypes = [
    {value: 'plant', viewValue: 'plants'},
    {value: 'animal', viewValue: 'animal product'},
    {value: 'meat', viewValue: 'meat'}
  ];

}
