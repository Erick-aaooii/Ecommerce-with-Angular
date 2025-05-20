import { Component } from '@angular/core';
import { ProductComponent } from './components/product/product.component';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [ ProductComponent ],
  templateUrl: './produtos.component.html'
})
export class ProdutosComponent {

}
