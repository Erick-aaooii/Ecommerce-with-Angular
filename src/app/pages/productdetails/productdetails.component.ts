import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/products.service';
import { RealtransformePipe } from '../../pipes/realtransforme.pipe';

@Component({
  selector: 'app-productdetails',
  imports: [ RealtransformePipe ],
  templateUrl: './productdetails.component.html'
})
export class ProductdetailsComponent implements OnInit {
  produto: Product | undefined
  
  constructor(private route: ActivatedRoute, private productService: ProductService) {}
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.productService.getProdutoPorId(id).subscribe(p => (this.produto = p))
  }

  currentIndex = 0

prevImage() {
  if (!this.produto?.images) return
  this.currentIndex =
    (this.currentIndex - 1 + this.produto.images.length) % this.produto.images.length
}

nextImage() {
  if (!this.produto?.images) return
  this.currentIndex = (this.currentIndex + 1) % this.produto.images.length
}
}
