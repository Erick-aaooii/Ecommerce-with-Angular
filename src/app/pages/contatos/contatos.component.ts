import { Component } from '@angular/core';
import { Config } from '../../db/ConfigOPtions';

@Component({
  selector: 'app-contatos',
  imports: [],
  templateUrl: './contatos.component.html'
})
export class ContatosComponent {
  config = Config
}
