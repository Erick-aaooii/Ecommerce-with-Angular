import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { RealtransformePipe } from '../../../../pipes/realtransforme.pipe';
import { Product } from '../../../../models/product';
import { CartService } from '../../../../services/Cart.service';

@Component({
  selector: 'productForm',
  standalone: true,
  imports: [ NgStyle, RealtransformePipe ],
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
      const selectedSize = this.selectedSize[color];
      if (!selectedSize) continue;

      const key = `${color}-${selectedSize}`;
      const quantity = this.selectedQuantities[key] || 0;

      if (quantity > 0) {
        this.cartService.addItem({
          productId: this.produto.id,
          productName: this.produto.name,
          variantColor: color,
          size: selectedSize,
          quantity,
          price: this.produto.price,
          total: this.produto.price * quantity
        });
      }
    }
  }
}