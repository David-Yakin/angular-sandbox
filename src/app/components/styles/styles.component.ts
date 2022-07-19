import { Component } from '@angular/core';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.css'],
})
export class StylesComponent {
  balck: string = 'black';
  isRed: boolean = false;
  isBlue: boolean = true;

  toggle() {
    this.isRed = !this.isRed;
    this.isBlue = !this.isBlue;
  }
}
