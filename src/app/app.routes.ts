import { Routes } from '@angular/router';
import { Alumnos } from './features/alumnos/alumnos';
import { Component } from '@angular/core';
import { ViewStudent } from './features/alumnos/view-student/view-student';

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
    path: 'view-student',
    component: ViewStudent,
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
