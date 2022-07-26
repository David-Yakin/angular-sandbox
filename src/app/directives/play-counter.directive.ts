import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[playCounter]',
})
export class PlayCounterDirective {
  counter: number = 0;

  constructor(element: ElementRef) {
    element.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('window: keydown', ['$event'])
  moshePressOnKey(e: KeyboardEvent): void {
    if (e.code === 'ArrowUp') this.counter++;
    if (e.code === 'ArrowDown') this.counter--;
    console.log(this.counter);
  }

  @HostListener('click', ['$event'])
  userClicked(e: MouseEvent): void {
    console.log(e);
  }
}
