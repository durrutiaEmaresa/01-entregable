import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Student } from '../../shared/entities';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-add-form',
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './add-form.html',
  styleUrls: ['./add-form.css']
})
export class AddForm implements OnInit {

  studentForm!: FormGroup;
  @Output() studentAdded = new EventEmitter<Student>();
  @Input() studentToEdit: Student | null = null;
  constructor(private fb: FormBuilder) {}


  ngOnInit() {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
      rut: ['', Validators.required],
      average: ['', [Validators.required, Validators.min(0), Validators.max(10)]]
    });
  }

  ngOnChanges() {
    if (this.studentToEdit) {
      this.studentForm.patchValue(this.studentToEdit);
    } else {
      this.studentForm.reset();
    }
  }

  onSubmit() {
    console.log('Form submitted:', this.studentForm.value);
    this.studentAdded.emit(this.studentForm.value as Student);
    this.onReset();
  }

  onReset() {
    this.studentForm.reset();
  }

}
