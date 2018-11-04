import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'validacion-basica-por-codigo',
  templateUrl: './validacion-basica-por-codigo.component.html'
})
export class ValidacionBasicaPorCodigoComponent implements OnInit {
  formulario:FormGroup; //recordar importar ReactiveFormsModule en el app.module

  usuario = {
    nombre:"marcos j",
    apellidos:"rs",
    email:"marcosjrs80@gmail.com"
  }

  constructor() {

    this.formulario = new FormGroup({
      nombre:new FormControl("", Validators.required),
      apellidos:new FormControl(" ", Validators.minLength(2) ),
      email:new FormControl("",[
                              Validators.required, 
                              Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}")
                            ]),
    });
    this.formulario.setValue(this.usuario);
    
    /*
    Si la estructura fuera 
    usuario = {
      nombreCompleto:{
        nombre:"",
        apellidos:"",
      },
      email:"marcosjrs80@gmail.com"
    }
    nombreCompleto tendría que ser un FormGroup y en el html debería englobarse los dos formControlName de nombre y apellidos en un div con formGroupName="nombreCompleto"
    */
   }

  ngOnInit() {
  }

  guardar(){
    console.log(this.formulario);
  }

}
