import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-demo',
  templateUrl: './data-binding-demo.html',
  standalone: false,
  styleUrls: ['./data-binding-demo.css']
})

export class DataBindingDemo {
  title = "Hello Angular";
  imageUrl = "./favicon.ico";
  num = 0;
  increment(){
    this.num++;
  }
}
