import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'child-counter',
  templateUrl: './child-counter.component.html',
  styles: [],
})
export class ChildCounterComponent {
  @Input() counter: number = 0;
  @Output() setCount = new EventEmitter();

  setCounter(command: string) {
    if (command === 'increment') return this.setCount.emit(this.counter + 1);
    if (command === 'decrement') return this.setCount.emit(this.counter - 1);
    this.setCount.emit(0);
  }
}
