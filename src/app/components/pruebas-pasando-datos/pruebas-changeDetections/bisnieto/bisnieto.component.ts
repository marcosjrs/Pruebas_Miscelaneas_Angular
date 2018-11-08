import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bisnieto',
  template: `<div class="bisnieto">
              <div class="titulo">Bisnieto</div>
              <button (click)="consolearComponente()">consolearComponente()</button>
            </div>`
})
export class BisnietoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log('\t\t\t[BisnietoComponent] ngDoCheck');
  }

  ngOnChanges() {
    console.log('\t\t\t[BisnietoComponent] ngOnChanges');
  }

  consolearComponente(){
    console.log(BisnietoComponent)
  }
}