import { Component } from '@angular/core';
import { ContactServiceService } from '../../../../services/ContactService.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contact } from '../../../../models/contacts';

@Component({
  selector: 'contactForm',
  imports: [ ReactiveFormsModule ],
  templateUrl: './contactForm.component.html'
})
export class ContactFormComponent { 
  constructor(private contactService: ContactServiceService) {}

  contactForm: FormGroup = new FormGroup({
    name: new FormControl('',
      [Validators.required, Validators.minLength(3), Validators.maxLength(25)]
    ),
    email: new FormControl('',
      [Validators.required, Validators.email]
    ),
    telephone: new FormControl('',
      [Validators.required, Validators.pattern('^[0-9]*$')]
    ),
    message: new FormControl('',
      [Validators.required, Validators.maxLength(500)]
    )
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
