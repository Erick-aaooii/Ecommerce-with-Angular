import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/Cart.service';
import { AsyncPipe } from '@angular/common';
import { RealtransformePipe } from '../../pipes/realtransforme.pipe';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, AsyncPipe, RealtransformePipe],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  private cartService = inject(CartService);
  cartItems$ = this.cartService.cart$;

  getTotalPrice(cartItems: any[]): number {
    return cartItems.reduce((total, item) => total + item.total, 0);
  }
  removeItem(item: any) {
  this.cartService.removeItem(item);
}

}