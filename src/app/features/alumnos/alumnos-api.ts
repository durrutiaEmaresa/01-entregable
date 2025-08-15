import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Student } from '../../../shared/entities';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnosAPI {
  baseURL = 'http://localhost:3000';
  baseURLMockApi = 'https://689e7b653fed484cf8773c8c.mockapi.io/';
  constructor(private http: HttpClient) {}

  // getAlumnos(): Observable<Student[]> {
  //   return this.http.get<Student[]>(`${this.baseURL}/students`);
  // }

  getAlumnos(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseURLMockApi}/students`);
  }

  deleteAlumnos(student: Student): Observable<void> {
    return this.http.delete<void>(`${this.baseURLMockApi}/students/${student.id}`).pipe(delay(1000));
  }
  // Nuevo método para agregar estudiante
  // addStudent(student: Omit<Student, 'id'>): Observable<Student> {
  //   return this.http.post<Student>(`${this.baseURL}/students`, student);
  // }
   addStudent(student: Omit<Student, 'id'>): Observable<Student> {
    return this.http.post<Student>(`${this.baseURLMockApi}/students`, student);
  }

  // Método para actualizar estudiante (opcional)
  updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.baseURL}/students/${student.id}`, student);
  }
}
