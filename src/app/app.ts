import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Toolbar } from './toolbar/toolbar';
import { HttpClient } from '@angular/common/http';
import { Student } from '../shared/entities';
import { CommonModule } from '@angular/common';
import { StudentsTable } from "./students-table/students-table";
import { AddForm } from "./add-form/add-form";

@Component({
  selector: 'app-root',
  imports: [Navbar, Toolbar, RouterOutlet, CommonModule, StudentsTable, AddForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  students: Student[] = [];
  activeSection = 'students';
  selectedStudent: Student | null = null;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Student[]>('mocks/students.json').subscribe(data => {
      this.students = data;
    });
  }


  addStudent(student: Student) {
    this.students = [...this.students, student];
    console.log('Student added:', student);
  }

  removeStudent(student: Student) {
    this.students = this.students.filter(s => s !== student);
  }


  onEditStudent(student: Student) {
    this.selectedStudent = { ...student }; // Copia para edición
    this.activeSection = 'add'; // Opcional: muestra el formulario de edición
  }
}
