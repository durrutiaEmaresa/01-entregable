import { Component } from '@angular/core';
import { Student } from '../../../../shared/entities';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-view-student',
  imports: [JsonPipe],
  templateUrl: './view-student.html',
  styleUrl: './view-student.css'
})
export class ViewStudent {

  student: Student | undefined;
  constructor(private router: Router) {
    // Retrieve the student data from the router state
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.student = navigation.extras.state?.["student"] as Student;
    }
  }

}
