import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-form',
  imports: [ RouterLink ],
  templateUrl: './registerForm.component.html'
})
export class RegisterFormComponent { 
  visibility = true

  visibilityChange() {
    this.visibility = !this.visibility
  }
 }
