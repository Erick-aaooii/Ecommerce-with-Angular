import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CartItem } from '../../models/product';
import { CartService } from '../../services/Cart.service';
import { RealtransformePipe } from '../../pipes/realtransforme.pipe';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RealtransformePipe],
  templateUrl: './cart.component.html'
})
export class CartComponent {
  cartItems$: Observable<CartItem[]>;

  constructor(private cartService: CartService) {
    this.cartItems$ = this.cartService.cart$;
  }

  getTotalPrice(items: CartItem[]): number {
    return items.reduce((acc, item) => acc + item.total, 0);
  }
}
