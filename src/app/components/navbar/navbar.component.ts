import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`a{color:white}  .navbar-toggler{ outline-color: white} li{ margin-right:8px;} a.active{ font-weight: bold; }`]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
