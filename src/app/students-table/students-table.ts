import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Student } from '../../shared/entities';
import { MatTableModule } from '@angular/material/table';
import { FullnamePipe } from '../../shared/pipes/fullname-pipe';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-students-table',
  imports: [MatTableModule, FullnamePipe, MatSortModule, MatPaginatorModule],
  templateUrl: './students-table.html',
  styleUrl: './students-table.css'
})
export class StudentsTable {
 @Input() students: Student[] = [];
 @Output() deleteStudent = new EventEmitter<Student>();
 @Output() editStudent = new EventEmitter<Student>();
  displayedColumns: string[] = ['fullname', 'age', 'rut', 'average', 'acciones'];
  //displayedColumns: string[] = ['name', 'age'];

  constructor() {
    // Initialization logic if needed
  }

  onDelete(student: Student) {
    this.deleteStudent.emit(student);
  }


  onEdit(student: Student) {
    this.editStudent.emit(student);
  }
}
