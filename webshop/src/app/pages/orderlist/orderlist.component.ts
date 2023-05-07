import { Component } from '@angular/core';
import { Order } from 'src/app/shared/models/Order';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss']
})
export class OrderlistComponent{

  constructor(private orderService: OrderService) {
  }
  myOrders?: Array<Order>;

  ngOnInit(){
    const user = JSON.parse(localStorage.getItem('user') as string);
    
    this.orderService.getByUserId(user.uid).subscribe(orders => {
      this.myOrders = orders;
    });
  }


  deleteOrder(id: string){
    this.orderService.delete(id);
  }
  


}
