import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { RealtransformePipe } from '../../../../pipes/realtransforme.pipe';
import { CartItem, Product } from '../../../../models/product';
import { CartService } from '../../../../services/Cart.service';

@Component({
  selector: 'productForm',
  standalone: true,
  imports: [NgStyle, RealtransformePipe],
  templateUrl: './productForm.component.html'
})
export class ProductFormComponent {
  @Input() produto!: Product;

  selectedSize: { [color: string]: string } = {};
  selectedQuantities: { [key: string]: number } = {};

  constructor(private cartService: CartService) {}

  selectSize(color: string, size: string) {
    this.selectedSize[color] = size;
    const key = `${color}-${size}`;
    if (!this.selectedQuantities[key]) {
      this.selectedQuantities[key] = 0;
    }
  }

  increment(color: string, size: string) {
    const key = `${color}-${size}`;
    if (!this.selectedQuantities[key]) this.selectedQuantities[key] = 0;
    this.selectedQuantities[key]++;
  }

  decrement(color: string, size: string) {
    const key = `${color}-${size}`;
    if (this.selectedQuantities[key] > 0) this.selectedQuantities[key]--;
  }

  addToCart() {
  for (const variant of this.produto.variants) {
    const color = variant.color;

    for (const sizeEntry of variant.sizes) {
      const size = sizeEntry.size;
      const key = `${color}-${size}`;
      const quantity = this.selectedQuantities[key] || 0;

      if (quantity > 0) {
        const item: CartItem = {
          product: this.produto,
          variantColor: color,
          size: size,
          quantity,
          total: this.produto.price * quantity
        };
        this.cartService.addItem(item);
      }
    }
  }
}

}
