import { Component, OnInit, AfterViewInit, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent implements OnInit, AfterViewInit {
  imgs = ["imgs/carousel 1.jpg", "imgs/carousel 2.jpg", "imgs/carousel 3.jpg"]

  @ViewChild('carousel') carousel!: ElementRef;
  currentIndex = 0;
  totalSlides = 0;
  intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => this.nextSlide(), 3000);
  }

  ngAfterViewInit(): void {
    this.totalSlides = this.carousel.nativeElement.children.length;
    this.updateCarousel();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateCarousel();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
    this.updateCarousel();
  }

  updateCarousel() {
    const offset = -this.currentIndex * this.carousel.nativeElement.clientWidth;
    this.carousel.nativeElement.style.transform = `translateX(${offset}px)`;
  }
}