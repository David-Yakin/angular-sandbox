import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  text: string = 'wow!!!';
  imageUrl: string =
    'https://cdn.pixabay.com/photo/2022/06/20/07/32/dirt-road-7273240_960_720.jpg';
}
