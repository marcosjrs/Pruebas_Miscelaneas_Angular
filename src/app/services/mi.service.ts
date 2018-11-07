import { Injectable } from '@angular/core';
import { Observable, from, of, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiService {
  valor: string;
  valorObservable: Observable<string>;

  constructor() {

    this.valor = "sin modificar";
    this.valorObservable = of("sin modificar");
    this.valorObservable.subscribe(valor => console.log("[Servicio] observable cambió a valor: ", valor));

    this.cambiarValor();
    this.cambiarValorObservable();
  }

  cambiarValor(valor: string = "modificado", msg: number = 2000) {
    setTimeout(() => {
      this.valor = valor;
      console.log("[Servicio] cambió a valor: ", valor);
    }, msg);
  }

  cambiarValorObservable(valor: string = "modificado", msg: number = 2000) {
    interval(msg).subscribe(() => {
      this.valorObservable = of(valor);
    });
  }


}
