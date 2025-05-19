import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Config } from '../../db/ConfigOPtions';
import { CartService } from '../../services/Cart.service';

@Component({
  selector: 'app-navbar',
  imports: [ RouterLink ],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  config = Config
  links = [
    {name: "Início", link: ""},
    {name: "Produtos", link: "produtos"},
    {name: "Contatos", link: "contatos"}
  ]

  totalItems = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
  this.cartService.cart$.subscribe(items => {
    this.totalItems = items.reduce((total, item) => total + item.quantity, 0);
  });
}


}
