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
    email:"marcosjrs80@gmail.com",
    pais:"",
    sexo:"Sin definir"
  }
  paises = [
    {nombre:"España", codigo:"1"},
    {nombre:"Francia", codigo:"2"},
    {nombre:"Portugal", codigo:"3"}
  ];
  paisSeleccionado={nombre:"Francia", codigo:"2"};

  constructor() { }

  ngOnInit() {
  }

  guardar(formulario:NgForm){
    console.log(formulario);
    console.log(this.usuario)
  }

  selectPais(pais){
    console.log("select",pais)
  }

  cambioPais(pais){
    console.log("change",pais)
  }

}
