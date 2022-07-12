import { Component } from '@angular/core';

@Component({
  selector: 'binding-properties',
  templateUrl: './binding-properties.component.html',
  styleUrls: ['./binding-properties.component.css'],
})
export class BindingPropertiesComponent {
  image: { url: string; alt: string } = {
    url: 'https://cdn.pixabay.com/photo/2022/07/01/17/58/lighthouse-7296029_960_720.jpg',
    alt: 'light house',
  };

  isHidden: boolean = false;

  toggle(): void {
    this.isHidden = !this.isHidden;
  }
}
