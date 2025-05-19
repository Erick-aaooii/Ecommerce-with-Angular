import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>([]);

  cart$ = this.cartSubject.asObservable();

  constructor() {
    const saved = localStorage.getItem('cart');
    if (saved) {
      this.cartItems = JSON.parse(saved);
      this.cartSubject.next(this.cartItems);
    }
  }

  getItems() {
    return [...this.cartItems];
  }

  addItem(item: any) {
    const index = this.cartItems.findIndex(i =>
      i.productId === item.productId &&
      i.variantColor === item.variantColor &&
      i.size === item.size
    );

    if (index >= 0) {
      this.cartItems[index].quantity += item.quantity;
      this.cartItems[index].total =
        this.cartItems[index].quantity * this.cartItems[index].price;
    } else {
      this.cartItems.push(item);
    }
    this.cartSubject.next([...this.cartItems]);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  clearCart() {
    this.cartItems = [];
    this.cartSubject.next([]);
    localStorage.removeItem('cart');
  }
  getTotalQuantity(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }
  
}