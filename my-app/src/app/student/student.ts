import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-student',
  templateUrl: './student.html',
  styleUrls: ['./student.css'],
  imports: [CommonModule]
})

export class StudentComponent {
  isVisible = false;
  students = ['Prizam', 'Riya', 'Prashansa'];

   toggle() {
    this.isVisible = !this.isVisible;
    console.log('Toggled:', this.isVisible);
   }
}