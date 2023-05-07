import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {

  products = [
    {value: 'plant-0', viewValue: 'plants'},
    {value: 'animal-1', viewValue: 'animal product'},
    {value: 'meat-2', viewValue: 'meat'}
  ];

}
