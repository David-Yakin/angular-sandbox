import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.css'],
})
export class DecoratorsComponent {
  @Input() text: string = '';
  @Input() url: string = '';
}
