import { Component } from '@angular/core';

 //Decorator
 //metadata
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Netflix';
  
  sum(x: number, y: number) {
    return x + y;
  }
}
