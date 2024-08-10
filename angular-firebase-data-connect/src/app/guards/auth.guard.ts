import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { auth } from '../app.config';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (auth.currentUser) {
    return true;
  }
  router.navigate(['/'], {
    queryParams: { returnUrl: state.url },
  });
  return false;
};
