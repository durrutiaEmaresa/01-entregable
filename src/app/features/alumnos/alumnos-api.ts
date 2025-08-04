import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../../../shared/entities';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnosAPI {
  baseURL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getAlumnos(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseURL}/students`);
  }

}
