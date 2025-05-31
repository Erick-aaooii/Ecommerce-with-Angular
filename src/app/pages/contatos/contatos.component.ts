import { Component } from '@angular/core';
import { Config } from '../../db/ConfigOPtions';
import { ContactFormComponent } from './components/contactForm/contactForm.component';
import { ContactsInformationsComponent } from './components/contactsInformations/contactsInformations.component';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  imports: [ContactFormComponent, ContactsInformationsComponent ]
})
export class ContatosComponent {

  config = Config
}
