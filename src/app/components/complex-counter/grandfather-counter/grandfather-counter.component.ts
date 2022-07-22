import { Component } from '@angular/core';

@Component({
  selector: 'grandfather-counter',
  templateUrl: './grandfather-counter.component.html',
  styles: [],
})
export class GrandfatherCounterComponent {
  counter: number = 2;
  setCounter(num: number) {
    this.counter = num;
  }
}
