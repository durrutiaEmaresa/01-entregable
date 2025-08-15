import { Component } from '@angular/core';
import { AlumnosAPI } from './alumnos-api';
import { Student } from '../../../shared/entities';
import { CommonModule, JsonPipe } from '@angular/common';
//import { StudentsTable } from "../../students-table/students-table";
import { StudentsTable } from "./student-table/student-table";
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-alumnos',
  imports: [CommonModule, StudentsTable],
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.css'
})
export class Alumnos {
  alumnos: Student[] = [];
  constructor(private alumnosApi: AlumnosAPI) {

  }

  ngOnInit() {
    this.alumnosApi.getAlumnos().subscribe(students => {
      //console.log(students);
      this.alumnos = students;
    });
  }

  deleteStudent(student: Student){

    this.alumnosApi.deleteAlumnos(student).pipe(
      switchMap(() => this.alumnosApi.getAlumnos())
    ).subscribe(students => {
      this.alumnos = students;
    });

  }

}
