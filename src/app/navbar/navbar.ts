import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../shared/entities';
import { RoutesPaths } from '../../shared/routes';
import * as AuthActions from '../store/auth/auth.actions';
import * as AuthSelectors from '../store/auth/auth.selectors';

interface MenuItem {
  path: string;
  label: string;
  icon: string;
  roles: ('admin' | 'usuario')[];
}

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
  currentUser$: Observable<User | null>;
  isAuthenticated$: Observable<boolean>;

  menuItems: MenuItem[] = [
    { path: `/${RoutesPaths.Alumnos}`, label: 'Alumnos', icon: 'people', roles: ['admin', 'usuario'] },
    { path: `/${RoutesPaths.Cursos}`, label: 'Cursos', icon: 'book', roles: ['admin', 'usuario'] },
    { path: `/${RoutesPaths.Inscripciones}`, label: 'Inscripciones', icon: 'assignment', roles: ['admin', 'usuario'] },
    { path: `/${RoutesPaths.AddStudent}`, label: 'Agregar Alumno', icon: 'person_add', roles: ['admin'] }
  ];

  constructor(private store: Store) {
    this.currentUser$ = this.store.select(AuthSelectors.selectCurrentUser);
    this.isAuthenticated$ = this.store.select(AuthSelectors.selectIsAuthenticated);
  }

  ngOnInit() {
    this.store.dispatch(AuthActions.checkAuthStatus());
  }

  getVisibleMenuItems(user: User | null): MenuItem[] {
    if (!user) return [];

    return this.menuItems.filter(item =>
      item.roles.includes(user.role)
    );
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}
