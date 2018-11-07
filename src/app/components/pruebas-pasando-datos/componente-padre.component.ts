import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styles: []
})
export class ComponentePadreComponent {
  textoDeEventoDeHijo:string;

  constructor() { }

  funcionPadre(textoDelEventoEmitidoPorHijo){
    this.textoDeEventoDeHijo = textoDelEventoEmitidoPorHijo;
    console.log("Recogiendo evento lanzado por hijo desde el padre con texto:",textoDelEventoEmitidoPorHijo);
  }

}
