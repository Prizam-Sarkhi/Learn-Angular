import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  standalone: false,
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList implements OnInit {
  students: string[] = [];

  constructor(private studentService: Student) {}

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }

}
