import {inject} from '@angular/core';
import { Router } from '@angular/router';

import {AuthService} from './auth.service';

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn) {
    console.log(authService.isLoggedIn)
    router.parseUrl('/');
    return true;
  }

  return router.parseUrl('/login');
};
