import { createReducer, on } from '@ngrx/store';
import { User } from '../../../shared/entities';
import * as AuthActions from './auth.actions';

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

export const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
  isAuthenticated: false
};

export const authReducer = createReducer(
  initialState,

  on(AuthActions.login, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),

  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    isLoading: false,
    error: null,
    isAuthenticated: true
  })),

  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    user: null,
    isLoading: false,
    error,
    isAuthenticated: false
  })),

  on(AuthActions.logout, (state) => ({
    ...state,
    user: null,
    isAuthenticated: false,
    error: null,
    isLoading: false
  })),

  on(AuthActions.setCurrentUser, (state, { user }) => ({
    ...state,
    user,
    isAuthenticated: !!user
  }))
);
