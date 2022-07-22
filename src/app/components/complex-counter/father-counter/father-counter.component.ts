import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'father-counter',
  templateUrl: './father-counter.component.html',
  styles: [],
})
export class FatherCounterComponent {
  @Input() counter: number = 1;
  @Output() setCounter = new EventEmitter();

  setCount(num: number) {
    this.setCounter.emit(num);
  }
}
