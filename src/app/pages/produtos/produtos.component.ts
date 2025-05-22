import { Component } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { SearchProductsComponent } from "./components/searchProducts/searchProducts.component";

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [ProductComponent, SearchProductsComponent],
  templateUrl: './produtos.component.html'
})
export class ProdutosComponent {

}
