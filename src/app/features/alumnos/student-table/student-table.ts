import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { Student } from '../../../../shared/entities';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FullnamePipe } from '../../../../shared/pipes/fullname-pipe';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-students-table',
  imports: [MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    FullnamePipe,
    MatSortModule,
    MatPaginatorModule,
    RouterModule],
  templateUrl: './student-table.html',
  styleUrl: './student-table.css'
})
export class StudentsTable {
 @Input() students: Student[] = [];
 @Output() deleteEvent = new EventEmitter<Student>();
  displayedColumns: string[] = ['fullname', 'age', 'rut', 'average', 'acciones'];

  constructor(private router: Router) {

  }


  viewDetails(student: Student) {
    this.router.navigate(['/view-student'], {
      state: { student }
    });
  }

  deleteStudent(student: Student) {
    this.deleteEvent.emit(student);
  }
}
