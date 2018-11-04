import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-pruebas-formularios',
  template: `
  <validacion-basica-por-template></validacion-basica-por-template>
  <hr><hr>
  <validacion-basica-por-codigo></validacion-basica-por-codigo>
  `
})
export class ContainerPruebasFormulariosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
