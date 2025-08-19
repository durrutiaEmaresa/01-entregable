import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AuthService } from '../features/services/auth-service';
import { User } from '../../shared/entities';
import { RoutesPaths } from '../../shared/routes'; // ✅ Importar el enum

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
  currentUser: User | null = null;
  isLoggedIn = false;

  // ✅ Usando el enum RoutesPaths
  menuItems: MenuItem[] = [
    { path: `/${RoutesPaths.Alumnos}`, label: 'Alumnos', icon: 'people', roles: ['admin', 'usuario'] },
    { path: `/${RoutesPaths.Cursos}`, label: 'Cursos', icon: 'book', roles: ['admin', 'usuario'] },
    { path: `/${RoutesPaths.Inscripciones}`, label: 'Inscripciones', icon: 'assignment', roles: ['admin', 'usuario'] },
    { path: `/${RoutesPaths.AddStudent}`, label: 'Agregar Alumno', icon: 'person_add', roles: ['admin'] }
  ];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      this.isLoggedIn = !!user;
    });
  }

  getVisibleMenuItems(): MenuItem[] {
    if (!this.currentUser) return [];

    return this.menuItems.filter(item =>
      item.roles.includes(this.currentUser!.role)
    );
  }

  logout() {
    this.authService.logout();
  }
}
