import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'categories',
  imports: [],
  templateUrl: './categories.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent { 
  categories = [
    {img: "https://thumb.braavo.me/kibella/600/3950133610.webp", alt: "Novidades"},
    {img: "https://thumb.braavo.me/kibella/600/3342028862.webp", alt: "Vestidos"},
    {img: "https://thumb.braavo.me/kibella/600/3112536132.webp", alt: "Conjuntos"},
    {img: "https://thumb.braavo.me/kibella/600/3014375857.webp", alt: "Saias"},
    {img: "https://thumb.braavo.me/kibella/600/1553341521.webp", alt: "Blusas"}
  ]
}
