import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Contact } from '../../models/contacts';
import { ContactServiceService } from '../../services/ContactService.service';
import { Config } from '../../db/ConfigOPtions';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  imports: [ ReactiveFormsModule ]
})
export class ContatosComponent {

  config = Config

  constructor(private contactService: ContactServiceService) {}

  contactForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    telephone: new FormControl(''),
    message: new FormControl('')
  });

  enviarFormulario() {
    const dados: Contact = this.contactForm.value as Contact;

    this.contactService.adicionarContato(dados).then(() => {
      this.contactForm.reset();
    }).catch(erro => {
      console.error('Erro ao enviar:', erro);
    });
  }
}
