import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-demo',
  standalone: false,
  templateUrl: './forms-demo.html',
  styleUrls: ['./forms-demo.css'],
})
export class FormsDemo {
  num1: number = 0;
  num2: number = 0;
  sum: number | null = null;

  calculateSum(){
    console.log('Clicked');
    console.log(this.num1, this.num2);
    this.sum = this.num1 + this.num2;
  }
}
