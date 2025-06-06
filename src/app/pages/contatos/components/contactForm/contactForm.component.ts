import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactServiceService } from '../../../../services/Contact.service';
import { Contact } from '../../../../models/contacts';

@Component({
  selector: 'contactForm',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contactForm.component.html'
})
export class ContactFormComponent {
  private contactService = inject(ContactServiceService)
  private fb = inject(FormBuilder);

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    email: ['', [Validators.required, Validators.email]],
    telephone: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(8), Validators.maxLength(11)]],
    message: ['', [Validators.required, Validators.maxLength(500)]]
  });

  formFields = ['name', 'email', 'telephone', 'message'];

  fieldLabels: Record<string, string> = {
    name: 'Nome',
    email: 'E-mail',
    telephone: 'Telefone',
    message: 'Mensagem'
  };

  getErrorMessage(field: string): string | null {
    const control = this.contactForm.get(field);
    if (!control || !control.touched || !control.errors) return null;

    const errors = control.errors;
    const label = this.fieldLabels[field];

    const errorMap: Record<string, string> = {
      required: `${label} é obrigatório.`,
      minlength: `${label} deve ter pelo menos ${errors?.['minlength']?.requiredLength} caracteres.`,
      maxlength: `${label} pode ter no máximo ${errors?.['maxlength']?.requiredLength} caracteres.`,
      email: `E-mail inválido.`,
      pattern: `${label} deve conter apenas números.`
    };

    const firstErrorKey = Object.keys(errors)[0];
    return errorMap[firstErrorKey] || null;
  }

  getLabelClass(field: string): string {
    const control = this.contactForm.get(field);
    return control?.touched && control.invalid
      ? 'block text-sm font-medium text-red-600'
      : 'block text-sm font-medium text-gray-700';
  }

  enviarFormulario() {
    const dados: Contact = this.contactForm.value as Contact;
    this.contactService.adicionarContato(dados)
      .then(() => this.contactForm.reset())
      .catch(error => console.error('Erro ao enviar:', error));
  }
}
