import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.html',
  styleUrls: ['pipes-demo.css'],
  standalone: false
})

export class PipesDemo{
  text = "I Love RIYA";
  today = new Date();
  number = 1234.267;
  number2 = 5;
  profit = 0.79;
}