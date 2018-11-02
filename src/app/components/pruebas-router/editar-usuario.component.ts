import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styles: []
})
export class EditarUsuarioComponent implements OnInit {

  constructor(private router:ActivatedRoute) {
    //Así recogería un componente que está en una subruta, el parametro de la ruta de un padre
    router.parent.params.subscribe( params=>console.log( params["idUsuario"]) )
  }

  ngOnInit() {
  }

}
