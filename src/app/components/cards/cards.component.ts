import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html'
})
export class CardsComponent {
  options = [
    {img:"imgs/icon1.svg", name:"Vestidos"},
    {img:"imgs/icon2.svg", name:"Saias"},
    {img:"imgs/icon3.svg", name:"Blusas"}
  ]
}
