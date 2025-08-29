import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import * as AuthSelectors from '../../app/store/auth/auth.selectors';
import * as AuthActions from '../../app/store/auth/auth.actions';

export const authGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const router = inject(Router);

  store.dispatch(AuthActions.checkAuthStatus());

  return store.select(AuthSelectors.selectIsAuthenticated).pipe(
    take(1),
    map(isAuthenticated => {
      if (isAuthenticated) {
        return true;
      }

      router.navigate(['/login']);
      return false;
    })
  );
};

export const adminGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const router = inject(Router);

  store.dispatch(AuthActions.checkAuthStatus());

  return store.select(AuthSelectors.selectCurrentUser).pipe(
    take(1),
    map(user => {
      if (user && user.role === 'admin') {
        return true;
      }

      if (user) {
        router.navigate(['/alumnos']);
      } else {
        router.navigate(['/login']);
      }

      return false;
    })
  );
};
