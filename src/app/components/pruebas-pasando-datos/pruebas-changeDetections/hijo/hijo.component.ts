import { Component, OnInit, Input , EventEmitter, Output, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './hijo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush// Con esto el hijo no se entera de cambios del padre, hasta que se haga algo sobre el
              // y cuando hay un cambio en el padre de este, solo hace un ngDoCheck en los hijos directos, no en los hijos de los hijos y así sucesivamente....
})
export class HijoComponent implements OnInit {
  @Input('valorRecibido') valorRecibido;
  @Output() cambioValor: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  consolearComponente(){
    console.log(this.valorRecibido);
  }

  ngOnChanges() {
    console.log('\t[HijoComponent] ngOnChanges');
  }

  ngDoCheck(){
    console.log('\t[HijoComponent] ngDoCheck');
  }

  cambiarValor() {
    this.cambioValor.emit({"heroe": this.valorRecibido, "seleccionado":!this.valorRecibido.seleccionado});
  }

}