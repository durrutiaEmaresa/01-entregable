import { createAction, props } from '@ngrx/store';
import { User } from '../../../shared/entities';

export const login = createAction(
  '[Auth] Login',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

export const logout = createAction('[Auth] Logout');

export const checkAuthStatus = createAction('[Auth] Check Auth Status');

export const setCurrentUser = createAction(
  '[Auth] Set Current User',
  props<{ user: User | null }>()
);
