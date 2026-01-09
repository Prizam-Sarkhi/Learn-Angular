import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.html',
  styleUrls: ['./demo.css'],
  standalone: false,
})
export class Demo {
  count = 0;
  inc() {
    this.count++;
  }

  name = 'Rohan';
  age = '22';
  course = 'MCA';
  showDetails = false;

  displayStudentInfo() {
    this.showDetails = true;
  }
  isLoggedIn = false;
  students = ['Amit', 'Neha', 'Raj'];
  role = 'admin';
  isActive = true;
  hasError = false;
  color = 'blue';
  size = 18;
}
