import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../../../services/Auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule ],
  templateUrl: './loginForm.component.html'
})
export class LoginFormComponent {
  private authService = inject(AuthService);
  private route = inject(Router);

  showPassword = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  requestLogin() {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;
    this.authService.login(email!, password!).subscribe((userCredential) => {
      if (userCredential) {
        this.route.navigate(['/'])
      }
    });
  }
}

