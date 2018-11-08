import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MiService } from 'src/app/services/mi.service';

@Component({
  selector: 'interconectando-datos-servicios',
  templateUrl: './interconectando-datos-servicios.component.html',
  styles: []
})
export class InterconectandoDatosServiciosComponent implements OnInit {

  valor: string;
  valorObservable: Observable<string>;

  constructor(public miSvc: MiService) {
    this.valor = miSvc.valor;
    this.valorObservable = miSvc.valorObservable; //Recoge el valor, pero no referencia...
    miSvc.valorObservable.subscribe(v => console.log("[Consumidor del servicio] cambió valor observable de servicio a", v))
  }

  ngOnInit() {
  }

}
