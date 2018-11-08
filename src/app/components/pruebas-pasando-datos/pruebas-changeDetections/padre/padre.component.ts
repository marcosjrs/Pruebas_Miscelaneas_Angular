import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PadreComponent {
  private heroes: any[] = [
    { nombre: "Hulk", seleccionado: false },
    { nombre: "Thor", seleccionado: false }
  ]

  constructor(private ref: ChangeDetectorRef) { }

  ngDoCheck() {
    console.log('[PadreComponent] ngDoCheck');
  }

  cambiarValor(objeto:{heroe,seleccionado}) {
    objeto.heroe.seleccionado = objeto.seleccionado;
  }

  consolearComponente(){
    console.log(PadreComponent)
  }

  deatached() {
    console.log("[PadreComponent] Desvinculado referencias")
    this.ref.detach();
  }

  attach() {
    console.log("[PadreComponent] Revinculando referencias");
    this.ref.reattach();
  }

}