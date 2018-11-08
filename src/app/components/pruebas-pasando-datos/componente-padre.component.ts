import { Component } from '@angular/core';

@Component({
  selector: 'componentente-padre',
  templateUrl: './componente-padre.component.html',
  styles: []
})
export class ComponentePadreComponent {
  textoDeEventoDeHijo:string;
  valorDePadre:string="valor inicial del padre";

  constructor() {}

  modificarValorDePadrePasadoAHijo(){
    console.log("this.valorDePadre ha sido modificado: "+ this.valorDePadre);
    this.valorDePadre = "valor modificado del padre";
  }

  funcionPadre(textoDelEventoEmitidoPorHijo){
    this.textoDeEventoDeHijo = textoDelEventoEmitidoPorHijo;
    console.log("Recogiendo evento lanzado por hijo desde el padre con texto:",textoDelEventoEmitidoPorHijo);
  }

}
