import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'validacion-basica-por-codigo',
  templateUrl: './validacion-basica-por-codigo.component.html'
})
export class ValidacionBasicaPorCodigoComponent implements OnInit {
  formulario:FormGroup; //recordar importar ReactiveFormsModule en el app.module

  constructor() {
    this.formulario = new FormGroup({
      nombre:new FormControl("marcos j", Validators.required),
      apellidos:new FormControl("rs", Validators.minLength(2) ),
      email:new FormControl("marcosjrs80@gmail.com",[
                              Validators.required, 
                              Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}")
                            ]),
    });
   }

  ngOnInit() {
  }

  guardar(){
    console.log(this.formulario);
  }

}
