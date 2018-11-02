import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PruebaNgStyleComponent } from './components/prueba-ng-style/prueba-ng-style.component';
import { PruebaNgClassComponent } from './components/prueba-ng-class/prueba-ng-class.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { PruebaDirectivasPersonalizadasComponent } from './components/prueba-directivas-personalizadas/prueba-directivas-personalizadas.component';
import { PruebaNgSwitchComponent } from './components/prueba-ng-switch/prueba-ng-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaNgStyleComponent,
    PruebaNgClassComponent,
    ResaltadoDirective,
    PruebaDirectivasPersonalizadasComponent,
    PruebaNgSwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
