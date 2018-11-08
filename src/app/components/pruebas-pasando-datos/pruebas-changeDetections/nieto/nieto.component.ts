import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html'
})
export class NietoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  consolearComponente(){
    console.log(NietoComponent);
  }

  ngDoCheck() {
    console.log('\t\t[NietoComponent] ngDoCheck');
  }

  ngOnChanges() {
    console.log('\t\t[NietoComponent] ngOnChanges ');
  }

}