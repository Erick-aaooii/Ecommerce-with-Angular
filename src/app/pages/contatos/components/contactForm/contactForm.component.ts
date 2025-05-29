import { Component } from '@angular/core';
import { ContactServiceService } from '../../../../services/ContactService.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Contact } from '../../../../models/contacts';

@Component({
  selector: 'contactForm',
  imports: [ ReactiveFormsModule ],
  templateUrl: './contactForm.component.html'
})
export class ContactFormComponent { 
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
