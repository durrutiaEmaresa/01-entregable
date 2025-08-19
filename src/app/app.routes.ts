import { Routes } from '@angular/router';
import { authGuard, adminGuard } from '../shared/guards/auth-guard';
import { RoutesPaths } from '../shared/routes'; // ✅ Importar el enum

export const routes: Routes = [
  { path: RoutesPaths.Home, redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./features/login/login').then(c => c.Login) },
  {
    path: RoutesPaths.Alumnos,
    canActivate: [authGuard],
    loadComponent: () => import('./features/alumnos/alumnos').then(c => c.Alumnos)
  },
  {
    path: RoutesPaths.AddStudent,
    canActivate: [authGuard],
    loadComponent: () => import('./features/alumnos/add-student/add-student').then(c => c.AddStudent)
  },
  {
    path: RoutesPaths.Cursos,
    canActivate: [authGuard],
    loadComponent: () => import('./features/cursos/cursos').then(m => m.Cursos),
  },
  {
    path: RoutesPaths.Inscripciones,
    canActivate: [authGuard],
    loadComponent: () => import('./features/inscripciones/inscripciones').then(c => c.Inscripciones)
  },
  { path: '**', loadComponent: () => import('./features/not-found/not-found').then(c => c.NotFound) }
];
