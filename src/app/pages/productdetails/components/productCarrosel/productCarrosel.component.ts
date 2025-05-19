import { Component, Input, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'productCarrosel',
  standalone: true,
  templateUrl: './productCarrosel.component.html',
  imports: [CommonModule]
})
export class CarroselComponent implements AfterViewInit {
  @Input() product!: { images: string[] };
  @ViewChild('carousel') carousel!: ElementRef;
  currentImageIndex = 0;

  get totalSlides(): number {
    return this.product?.images?.length || 0;
  }

  ngAfterViewInit() {
    setTimeout(() => this.updateCarousel());
  }

  @HostListener('window:resize')
  onResize() {
    this.updateCarousel();
  }

  nextSlide() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.totalSlides;
    this.updateCarousel();
  }

  prevSlide() {
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
