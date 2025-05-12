import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/products.service';
import { RealtransformePipe } from '../../pipes/realtransforme.pipe';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-productdetails',
  imports: [ RealtransformePipe, NgClass, NgStyle ],
  templateUrl: './productdetails.component.html'
})
export class ProductdetailsComponent implements OnInit {
  produto: Product | undefined
  
  constructor(private route: ActivatedRoute, private productService: ProductService) {}
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.productService.getProdutoPorId(id).subscribe(p => (this.produto = p))
  }
  
}
