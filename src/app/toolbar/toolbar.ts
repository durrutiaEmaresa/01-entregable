import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../features/services/auth-service';
import { User } from '../../shared/entities';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css'
})
export class Toolbar implements OnInit {
  currentUser: User | null = null;
  currentPageTitle = 'Gestión de Estudiantes';

  private routeTitles: { [key: string]: string } = {
    '/alumnos': 'Gestión de Alumnos',
    '/cursos': 'Gestión de Cursos',
    '/inscripciones': 'Gestión de Inscripciones',
    '/add-student': 'Agregar Nuevo Alumno',
    '/view-student': 'Detalle del Alumno'
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });

    // Actualizar título según la ruta
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(event => event as NavigationEnd)
      )
      .subscribe(event => {
        this.currentPageTitle = this.routeTitles[event.urlAfterRedirects] || 'Gestión de Estudiantes';
      });
  }
}
