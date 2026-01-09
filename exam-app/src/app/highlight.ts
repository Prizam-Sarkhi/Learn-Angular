import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false,
})
export class Highlight {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = "yellow";
   }

}
