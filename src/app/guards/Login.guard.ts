import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/Auth.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const IsAuthenticade = inject(AuthService).IsAuthenticade
  const router = inject(Router)

  if (!IsAuthenticade) {
    return true
  }

  return router.createUrlTree(['/user'])
};
