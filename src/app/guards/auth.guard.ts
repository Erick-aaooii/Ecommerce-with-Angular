import { Router, type CanActivateFn, type Route } from '@angular/router';
import { AuthService } from '../services/Auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const IsAuthenticade = inject(AuthService).IsAuthenticade
  const router = inject(Router)
  if (IsAuthenticade) {
    return true;
  }
  return router.createUrlTree(['/login'])
};