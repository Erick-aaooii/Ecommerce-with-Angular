import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener
} from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/products.service';
import { RealtransformePipe } from '../../pipes/realtransforme.pipe';
import { NgStyle } from '@angular/common';

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

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

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
}
