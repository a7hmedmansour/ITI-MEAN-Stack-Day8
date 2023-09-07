import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar', //component directive
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  logo: string = 'Amazon';
  isLogin: boolean = false;
  //'ar-SA'
  constructor() {}
}
