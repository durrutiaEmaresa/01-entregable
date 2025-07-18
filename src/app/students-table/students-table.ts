import { Component, Input, input } from '@angular/core';
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
  displayedColumns: string[] = ['fullname', 'age', 'rut', 'average'];
  //displayedColumns: string[] = ['name', 'age'];

  constructor() {
    // Initialization logic if needed
  }
}
