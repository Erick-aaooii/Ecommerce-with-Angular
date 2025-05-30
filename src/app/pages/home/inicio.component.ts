import { Component } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DoubleCardComponent } from "./components/doubleCard/doubleCard.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { NewProductsComponent } from "./components/newProducts/newProducts.component";

@Component({
  selector: 'app-inicio',
  imports: [CarouselComponent, DoubleCardComponent, CategoriesComponent, NewProductsComponent],
  templateUrl: './inicio.component.html'
})
export class InicioComponent {
  
}
