import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, share, scan } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-container-pruebas-rxjs',
  templateUrl: './container-pruebas-rxjs.component.html',
  styles: []
})
export class ContainerPruebasRxjsComponent {
  subjectTexto$:Subject<string> = new Subject<string>();
  subjectNumero$:any;
  repos$: Observable<any>;

  constructor(private http: HttpClient) {
    //Escuchar los next de subjectTexto
    this.subjectTexto$.subscribe(str=>console.log(str)) // muestra en consola
    //Escuchar los next de subjectNumero, pero cuando se escucha pasa por un pipe que incrementa en uno 
    this.subjectNumero$ = new Subject<number>().pipe( scan((acc: number, current: number): number => acc + current) );
    this.subjectNumero$.subscribe(num=>console.log(num)) // muestra en consola

    //Otros pipes
    //Si no se le pone ese pipe con el share, con cada subscribe repetiría la petición... 
    //cada vez que se le hace un subscribe, o se le pasa por un "| async" en html
    this.repos$ = http.get(`https://api.github.com/users/marcosjrs/repos`).pipe(
      share()
    );
    this.repos$.subscribe( c => console.log("otra petición? con share() no, mirar el network de chrome ;) "));
  }

  ngOnInit() { }

}


