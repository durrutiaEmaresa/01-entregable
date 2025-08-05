import { Routes } from '@angular/router';
import { Alumnos } from './features/alumnos/alumnos';
import { Component } from '@angular/core';
import { ViewStudent } from './features/alumnos/view-student/view-student';
import { RoutesPaths } from '../shared/routes';

export const routes: Routes = [
  {
    path: '',
    component: Alumnos,
  },
  {
    path: RoutesPaths.Alumnos,
    component: Alumnos,
  },
  {
    path: RoutesPaths.ViewStudent,
    component: ViewStudent,
  },
  {
    path: RoutesPaths.Cursos,
    loadComponent: () => import('./features/cursos/cursos').then(m => m.Cursos),
  },
  {
    path: RoutesPaths.Inscripciones,
    loadComponent: () => import('./features/inscripciones/inscripciones').then(m => m.Inscripciones),
  },
];
