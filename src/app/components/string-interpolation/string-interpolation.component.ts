import { Component } from '@angular/core';
import { Customer } from 'src/app/pages/customers/customer';

@Component({
  selector: 'string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css'],
})
export class StringInterpolationComponent {
  thuna: string = 'Thuna be kesef!';
  obj: { name: string; age?: number } = { name: 'David' };
  customers: Array<Customer> = [];
}
