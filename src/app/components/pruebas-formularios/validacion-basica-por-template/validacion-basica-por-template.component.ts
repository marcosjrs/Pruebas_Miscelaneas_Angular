import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'validacion-basica-por-template',
  templateUrl: './validacion-basica-por-template.component.html'
})
export class ValidacionBasicaPorTemplateComponent implements OnInit {
  usuario = {
    nombre:"marcos j",
    apellidos:"rs",
    email:"marcosjrs80@gmail.com"
  }

  constructor() { }

  ngOnInit() {
  }

  guardar(formulario:NgForm){
    console.log(formulario);
  }

}
