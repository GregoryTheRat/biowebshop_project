import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  collectionName = "Orders";

  constructor(private afs: AngularFirestore) { }

  create(order: Order) {
    order.id = this.afs.createId();
    const user = JSON.parse(localStorage.getItem('user') as string);
    order.user_id = user.uid;
    return this.afs.collection<Order>(this.collectionName).doc(order.id).set(order);  
  }

  getByUserId(userId: string){
    return this.afs.collection<Order>(this.collectionName, ref => ref.where('user_id', '==', userId).orderBy('product_name', 'desc')).valueChanges();
  }

  getAll() {

  }

  update() {

  }

  delete(id: string) {
    return this.afs.collection<Order>(this.collectionName).doc(id).delete();
  }
}
