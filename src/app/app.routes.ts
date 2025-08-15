import { Routes } from '@angular/router';
import { RoutesPaths } from '../shared/routes';
import { adminGuard } from '../shared/guards/admin-guard';

export const routes: Routes = [
  {
    path: RoutesPaths.Alumnos,
    loadComponent: () => import('./features/alumnos/alumnos').then(m => m.Alumnos),
    canActivate: [adminGuard]
  },
  {
    path: RoutesPaths.ViewStudent,
    loadComponent: () => import('./features/alumnos/view-student/view-student').then(m => m.ViewStudent),
  },
  {
    path: RoutesPaths.AddStudent,
    loadComponent: () => import('./features/alumnos/add-student/add-student').then(m => m.AddStudent),
  },
  {
    path: RoutesPaths.EditStudent,
    loadComponent: () => import('./features/alumnos/edit-student/edit-student').then(m => m.EditStudent),
  },
  {
    path: RoutesPaths.Cursos,
    loadComponent: () => import('./features/cursos/cursos').then(m => m.Cursos),
  },
  {
    path: RoutesPaths.Inscripciones,
    loadComponent: () => import('./features/inscripciones/inscripciones').then(m => m.Inscripciones),
  },
  {
    path: "**",
    loadComponent: () => import('./features/not-found/not-found').then(m => m.NotFound),
  }
];
