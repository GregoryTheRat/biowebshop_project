import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  collectionName = 'Products';

  constructor(private afs: AngularFirestore) { }

  create(product: Product) {
    product.id = this.afs.createId();
    return this.afs.collection<Product>(this.collectionName).doc(product.id).set(product);  
  }

  getAll() {
    return this.afs.collection<Product>(this.collectionName).valueChanges(); //OBVSERVABLE
  }

  getByType(type: string){ //.orderBy('name', 'desc') 
    return this.afs.collection<Product>(this.collectionName, ref => ref.where('type', '==', type)).valueChanges();
  }

  update() {

  }

  delete() {

  }
}
