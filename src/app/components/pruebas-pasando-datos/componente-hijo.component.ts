import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styles: []
})
export class ComponenteHijoComponent {

  @Input()
  valor:string;
  @Output()
  funcion:EventEmitter<string>;

  constructor() {
    this.funcion = new EventEmitter<string>();
   }

  llamadaFuncion(){
    if(this.funcion){
      this.funcion.emit("texto de evento lanzado desde hijo");
    } 
  }

}

