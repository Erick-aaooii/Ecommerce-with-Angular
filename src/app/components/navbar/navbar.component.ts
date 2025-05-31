import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Config } from '../../db/ConfigOPtions';
import { CartService } from '../../services/Cart.service';
import { ContactServiceService } from '../../services/ContactService.service';
import { AuthService } from '../../services/Auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  config = Config;

  loginErro = inject(AuthService).loginError
  loginMessage = inject(AuthService).loginErrorMessage
  userIsLogged = inject(AuthService).userIsLogged
  stayLogged = inject(AuthService).stayLogged

  links = [
    { name: 'Início', link: '' },
    { name: 'Produtos', link: 'produtos' },
    { name: 'Contatos', link: 'contatos' }
  ];

  icon = Config.EcommerceConfig.icon;
  totalItems = 0;

  constructor(
    private cartService: CartService,
    private contactService: ContactServiceService
  ) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(items => {
      this.totalItems = items.reduce((total, item) => total + item.quantity, 0);
    });
  }

  get contactIsSent() {
    return this.contactService.contactIsSent;
  }

  get contactNoSent() {
    return this.contactService.contactNoSent;
  }
}