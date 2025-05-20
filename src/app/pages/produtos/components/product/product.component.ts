import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'
import { Product } from '../../../../models/product'
import { ProductService } from '../../../../services/products.service'

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink ],
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  items: Product[] = []
  imagemLoad = false
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProdutos().subscribe(produtos => {
      this.items = produtos
    })
  }
}
