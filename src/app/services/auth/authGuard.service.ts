import {inject} from '@angular/core';
import { Router } from '@angular/router';

import {AuthService} from './auth.service';

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const idToken = localStorage.getItem("id_token")

  if (authService.isLoggedIn || idToken) {
    console.log(authService.isLoggedIn)
    console.log(idToken)
    router.parseUrl('/');
    return true;
  }

  return router.parseUrl('/login');
};
