import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Student } from '../../../../shared/entities';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AlumnosAPI } from '../alumnos-api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  imports: [
    CommonModule, // <-- AGREGAR ESTA LÍNEA
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  templateUrl: './add-student.html',
  styleUrls: ['./add-student.css']
})
export class AddStudent implements OnInit, OnChanges {

  studentForm!: FormGroup;
  isLoading = false;

  @Output() studentAdded = new EventEmitter<Student>();
  @Input() studentToEdit: Student | null = null;

  constructor(
    private fb: FormBuilder,
    private alumnosAPI: AlumnosAPI,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', [Validators.required, Validators.min(16), Validators.max(99)]],
      rut: ['', [Validators.required, Validators.min(10000000), Validators.max(99999999)]],
      average: ['', [Validators.required, Validators.min(1), Validators.max(10)]]
    });
  }

  ngOnChanges() {
    if (this.studentToEdit && this.studentForm) {
      this.studentForm.patchValue(this.studentToEdit);
    } else if (this.studentForm) {
      this.studentForm.reset();
    }
  }

  onSubmit() {
    if (this.studentForm.valid) {
      this.isLoading = true;

      this.alumnosAPI.addStudent(this.studentForm.value).subscribe({
        next: (newStudent) => {
          this.isLoading = false;

          this.snackBar.open('Estudiante agregado exitosamente', 'Cerrar', {
            duration: 3000,
            panelClass: ['success-snackbar']
          });

          this.studentAdded.emit(newStudent);
          this.onReset();
          this.router.navigate(['/alumnos']);
        },
        error: (error) => {
          this.isLoading = false;
          console.error('Error agregando estudiante:', error);

          this.snackBar.open('Error al agregar estudiante', 'Cerrar', {
            duration: 3000,
            panelClass: ['error-snackbar']
          });
        }
      });
    }
  }

  onReset() {
    this.studentForm.reset();
  }
}
