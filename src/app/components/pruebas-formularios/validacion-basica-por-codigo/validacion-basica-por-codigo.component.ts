import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'validacion-basica-por-codigo',
  templateUrl: './validacion-basica-por-codigo.component.html'
})
export class ValidacionBasicaPorCodigoComponent implements OnInit {
  formulario:FormGroup; //recordar importar ReactiveFormsModule en el app.module
  
  usuario = {
    nombreCompleto:{
      nombre:"marcos j",
      apellidos:"rs"
    },    
    email:"marcosjrs80@gmail.com"
  }
  constructor() {

    this.formulario = new FormGroup({

      nombreCompleto:new FormGroup({
        nombre:new FormControl("", Validators.required),
        apellidos:new FormControl(" ", Validators.minLength(2) ),
      }),  

      email:new FormControl("",[
                              Validators.required, 
                              Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}")
                            ]),
    });
    this.formulario.setValue(this.usuario);
   }

  ngOnInit() {
  }

  guardar(){
    console.log(this.formulario);
    //this.formulario.reset();//vaciaría los valores, saltando las validaciones
    this.formulario.reset(this.usuario);// lo rellenaría con los valores iniciales, quedando tambien pristine.
  }

}
