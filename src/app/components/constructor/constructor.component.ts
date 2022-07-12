import { Component } from '@angular/core';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styles: [],
})
export class ConstructorComponent {
  title: string = '';
  counter: number = 0;
  interval: any;

  constructor() {
    this.title = 'form constructor!';
    this.interval = setInterval(() => {
      this.counter++;
    }, 1000);
  }

  handleCounter(command: string): void {
    if (command === 'stop') return clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.counter++;
    }, 1000);
  }
  reset() {
    this.counter = 0;
  }
}
