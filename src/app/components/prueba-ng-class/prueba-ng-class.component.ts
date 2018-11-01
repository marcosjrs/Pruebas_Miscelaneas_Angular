import { Component } from '@angular/core';

@Component({
  selector: 'prueba-ng-class',
  templateUrl: './prueba-ng-class.component.html',
  styles: [
    `.claseCSS1 { color:  blue;}
     .claseCSS2 { color:  green;}`
  ]
})
export class PruebaNgClassComponent {
  isClase1Activa:boolean=true;
  isClase2Activa:boolean=true;
  miClaseCSS:string = "text-info" ;

  constructor() { }

}
