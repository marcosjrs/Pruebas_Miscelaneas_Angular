import { Component, OnInit } from '@angular/core';
import { MiService } from 'src/app/services/mi.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-container-pruebas-pasando-datos',
  templateUrl: './container-pruebas-pasando-datos.component.html',
  styles: []
})
export class ContainerPruebasPasandoDatosComponent implements OnInit {

  valor: string;
  valorObservable: Observable<string>;

  constructor(public miSvc: MiService) {
    this.valor = miSvc.valor;
    this.valorObservable = miSvc.valorObservable;
    miSvc.valorObservable.subscribe(v => console.log("[Consumidor del servicio] cambió valor observable de servicio a", v))
  }


  ngOnInit() {
  }

}
