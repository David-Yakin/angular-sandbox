import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[heighLight]',
})
export class HeighLightDirective {
  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'green';
    element.nativeElement.style.color = 'red';
  }
}
