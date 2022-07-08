import { Component } from '@angular/core';

@Component({
  selector: 'string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css'],
})
export class StringInterpolationComponent {
  thuna: string = 'Thuna be kesef!';
  obj: { name: string; age?: number } = { name: 'David' };
}
