import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[resaltado]'
})
export class ResaltadoDirective {
  @Input("colores") colores:string; //directiva y además funciona como atributo. string de colores separados por "/"
 
  oldColor = "";
  oldBackgroundColor = "";
  color="";
  backgroundColor="";

  constructor(public el:ElementRef) {  }

  ngOnInit(){
    this.guardamosValoresIniciales();  //recogemos colores anteriores   
    this.establecemosResaltadoSegunColores();  //seteamos los nuevos
  }

  @HostListener('mouseenter') 
  alPasarRaton() { 
    console.log(this.colores)
    this.reseteamosValoresIniciales();
  } 

  @HostListener('mouseout') 
  alSalirRaton() {
    this.establecemosResaltadoSegunColores();
  } 

  guardamosValoresIniciales(){
    if(this.colores && this.colores.indexOf("/")>1){
      this.color = this.colores.split("/")[0];
      this.backgroundColor = this.colores.split("/")[1];
    }else{
      this.color = "white";
      this.backgroundColor = "black";
    }
    this.oldColor = this.el.nativeElement.style.color;   
    this.oldBackgroundColor = this.el.nativeElement.style.backgroundColor;
  }

  establecemosResaltadoSegunColores(){
    this.el.nativeElement.style.color =  this.color;
    this.el.nativeElement.style.backgroundColor = this.backgroundColor;
  }

  reseteamosValoresIniciales(){
    this.el.nativeElement.style.color = this.oldColor;
    this.el.nativeElement.style.backgroundColor = this.oldBackgroundColor;
  }

  //https://angular.io/api/core/HostListener
  //https://angular.io/guide/attribute-directives

}
