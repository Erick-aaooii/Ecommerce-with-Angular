import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Config } from '../../db/ConfigOPtions';

@Component({
  selector: 'app-navbar',
  imports: [ RouterLink ],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  config = Config
}
