import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/products.service';
import { RealtransformePipe } from '../../pipes/realtransforme.pipe';
import { NgStyle } from '@angular/common';
import { CartService } from '../../services/Cart.service'; 

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [RealtransformePipe, NgStyle],
  templateUrl: './productdetails.component.html'
})
export class ProductdetailsComponent implements OnInit, AfterViewInit {
  produto: Product | undefined;

  currentImageIndex = 0;
  totalSlides = 0;

  @ViewChild('carousel') carousel!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProdutoPorId(id).subscribe(p => {
      this.produto = p;
      this.totalSlides = this.produto?.images.length || 0;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.updateCarousel());
  }

  @HostListener('window:resize')
  onResize() {
    this.updateCarousel();
  }

  nextSlide() {
    if (!this.totalSlides) return;
    this.currentImageIndex = (this.currentImageIndex + 1) % this.totalSlides;
    this.updateCarousel();
  }

  prevSlide() {
    if (!this.totalSlides) return;
    this.currentImageIndex = (this.currentImageIndex - 1 + this.totalSlides) % this.totalSlides;
    this.updateCarousel();
  }

  updateCarousel() {
    if (!this.carousel) return;
    const offset = -this.currentImageIndex * this.carousel.nativeElement.clientWidth;
    this.carousel.nativeElement.style.transform = `translateX(${offset}px)`;
    this.carousel.nativeElement.style.transition = 'transform 0.5s ease';
  }

  selectedSize: { [color: string]: string } = {};
  selectedQuantities: { [key: string]: number } = {};

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
    if (!this.produto) return;
  
    for (const variant of this.produto.variants) {
      const color = variant.color;
      const selectedSize = this.selectedSize[color];
  
      if (!selectedSize) continue;
  
      const key = `${color}-${selectedSize}`;
      const quantity = this.selectedQuantities[key] || 0;
  
      if (quantity > 0) {
        const item = {
          productId: this.produto.id,
          productName: this.produto.name,
          variantColor: color,
          size: selectedSize,
          quantity,
          price: this.produto.price,
          total: this.produto.price * quantity
        };
  
        this.cartService.addItem(item);
      }
    }
  }
  

}