import { Routes } from '@angular/router';
import { Alumnos } from './features/alumnos/alumnos';

export const routes: Routes = [
  {
    path: '',
    component: Alumnos,
  },
  {
    path: 'alumnos',
    component: Alumnos,
  },
  {
    path: 'cursos',
    loadComponent: () => import('./features/cursos/cursos').then(m => m.Cursos),
  },
  {
    path: 'inscripciones',
    loadComponent: () => import('./features/inscripciones/inscripciones').then(m => m.Inscripciones),
  },
];
