import { Component } from '@angular/core';

@Component({
  selector: 'prueba-ng-style',
  templateUrl: './prueba-ng-style.component.html',
  styleUrls: ['./prueba-ng-style.component.css']
})
export class PruebaNgStyleComponent {
  fontSize:number = 12;
  fontStyle = {};

  constructor() {
    this.fontStyle = {'font-size': this.fontSize+'px'};
  }

}
