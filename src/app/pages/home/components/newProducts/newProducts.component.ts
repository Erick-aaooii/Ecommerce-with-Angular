import { Component } from '@angular/core';
import { ProductComponent } from "../../../produtos/components/product/product.component";

@Component({
  selector: 'newProducts',
  imports: [ProductComponent],
  templateUrl: './newProducts.component.html',
})
export class NewProductsComponent { }
