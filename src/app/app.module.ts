import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PruebaNgStyleComponent } from './components/prueba-ng-style/prueba-ng-style.component';
@NgModule({
  declarations: [
    AppComponent,
    PruebaNgStyleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
