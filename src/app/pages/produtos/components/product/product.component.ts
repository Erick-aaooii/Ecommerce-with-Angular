import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'
import { Product } from '../../../../models/product'
import { ProductService } from '../../../../services/products.service'

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  items: Product[] = []
  filteredItems: Product[] = []
  imagemLoad = false
  @Output() suggestionList = new EventEmitter<string[]>()

  private _searchTerm = ''
  @Input() set searchTerm(term: string) {
    this._searchTerm = term.toLowerCase()
    this.filterItems()
    this.emitSuggestions('')
  }

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProdutos().subscribe(produtos => {
      this.items = produtos
      this.filteredItems = produtos
    })
  }

  filterItems() {
    this.filteredItems = this.items.filter(item =>
      item.name.toLowerCase().includes(this._searchTerm)
    )
  }
  emitSuggestions(term: string) {
    const lowerTerm = term.toLowerCase()
    const suggestions = this.items
      .map(item => item.name)
      .filter(name => name.toLowerCase().includes(lowerTerm))
      .slice(0, 5)

    this.suggestionList.emit(suggestions)
  }
}
