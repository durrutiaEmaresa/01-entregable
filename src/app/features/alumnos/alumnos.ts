import { Component } from '@angular/core';
import { AlumnosAPI } from './alumnos-api';
import { Student } from '../../../shared/entities';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-alumnos',
  imports: [JsonPipe, CommonModule],
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

}
