import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Student {
  students:string[] = ['Amit', 'Neha', 'Riya', 'Prashansa'];

  getStudents() {
    return this.students;
  }
}
