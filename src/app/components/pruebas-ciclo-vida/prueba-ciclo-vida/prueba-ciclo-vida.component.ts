import { Component, OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-prueba-ciclo-vida',
  templateUrl: './prueba-ciclo-vida.component.html',
  styleUrls: []
})
export class PruebaCicloVidaComponent implements
  OnInit,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked {

  valor:number = 0;

  constructor() { 
    console.log("constructor...");
  }
  
  ngOnInit() { 
    console.log("ngOnInit...");
  }

  ngOnChanges():void{   
    console.log("ngOnChanges...");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck...");
  }
  
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit...");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked...");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit...");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked...\n--------");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy...");
  }
  



}
