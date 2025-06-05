import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../services/Auth.service';
import { User } from '../../../../models/user';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './registerForm.component.html'
})
export class RegisterFormComponent {
  visibility = true;
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  registerForm = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]],
    cpf: ['', [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11),
      Validators.pattern(/^\d+$/)
    ]],
    telephone: ['', [
      Validators.required,
      Validators.pattern(/^\(?\d{2}\)?\s?9\d{4}-?\d{4}$/)
    ]],
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)
    ]],
    passwordAgain: ['', Validators.required]
  });

  visibilityChange() {
    this.visibility = !this.visibility;
  }

  get passwordEquals(): boolean {
    const { password, passwordAgain } = this.registerForm.value;
    return password === passwordAgain;
  }

  getErrorMessage(field: string): string {
    const control = this.registerForm.get(field);
    if (!control || !control.errors || !control.touched) {
      return '';
    }
  
    const errors = control.errors;
  
    const errorMessages: { [key: string]: { [key: string]: string | ((e: any) => string) } } = {
      name: {
        required: 'Nome é obrigatório',
        minlength: 'Tamanho de nome inválido',
        maxlength: 'Tamanho de nome inválido',
      },
      cpf: {
        required: 'CPF é obrigatório',
        minlength: 'CPF precisa ter exatamente 11 dígitos',
        maxlength: 'CPF deve ter no máximo 11 dígitos',
        pattern: 'CPF deve conter apenas números',
      },
      telephone: {
        required: 'Telefone é obrigatório',
        pattern: 'Telefone inválido, formato esperado: (xx) 9xxxx-xxxx',
      },
      email: {
        required: 'Email é obrigatório',
        email: 'Email inválido',
      },
      password: {
        required: 'Senha é obrigatória',
        minlength: (e: any) => `Senha precisa ter no mínimo ${e.requiredLength} caracteres`,
        maxlength: (e: any) => `Senha pode ter no máximo ${e.requiredLength} caracteres`,
      },
      passwordAgain: {
        required: 'Confirmação de senha é obrigatória',
      },
    };
  
    const fieldErrors = errorMessages[field];
    if (!fieldErrors) return '';
  
    for (const errorKey of Object.keys(control.errors)) {
      const message = fieldErrors[errorKey];
      if (typeof message === 'function') {
        return message(control.errors[errorKey]);
      }
      if (typeof message === 'string') {
        return message;
      }
    }
  
    if (field === 'passwordAgain' && !this.passwordEquals) {
      return 'As senhas não coincidem';
    }
  
    return '';
  }
  
  register() {
    if (this.registerForm.invalid || !this.passwordEquals) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const { name, cpf, telephone, email, password } = this.registerForm.value;

    if (
      typeof name === 'string' &&
      typeof cpf === 'string' &&
      typeof telephone === 'string' &&
      typeof email === 'string' &&
      typeof password === 'string'
    ) {
      const user: User = {
        uid: '', // será preenchido pelo AuthService
        name,
        cpf,
        telephone,
        email,
        orders: []
      };

      this.authService.registerAndSaveUser(user, password).subscribe({
        next: () => {
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Erro no registro:', error);
        }
      });
    }
  }
}
