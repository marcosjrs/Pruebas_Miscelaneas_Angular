import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'prueba-ng-if-then-else',
  templateUrl: './prueba-ng-if-then-else.component.html'
})
export class PruebaNgIfThenElseComponent implements OnInit {
  bloqueDelThen: TemplateRef<any>|null = null;
  show: boolean = true;
 
  @ViewChild('bloque1DelThen')
  bloque1DelThen: TemplateRef<any>|null = null;
  @ViewChild('bloque2DelThen')
  bloque2DelThen: TemplateRef<any>|null = null;
 
  switchPrimary() {
    this.bloqueDelThen = this.bloqueDelThen === this.bloque1DelThen ? this.bloque2DelThen : this.bloque1DelThen;
  }
 
  ngOnInit() { this.bloqueDelThen = this.bloque1DelThen; }

}
