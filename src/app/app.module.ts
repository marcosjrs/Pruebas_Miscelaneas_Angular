import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PruebaNgStyleComponent } from './components/pruebas-directivas/prueba-ng-style.component';
import { PruebaNgClassComponent } from './components/pruebas-directivas/prueba-ng-class.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { PruebaDirectivasPersonalizadasComponent } from './components/pruebas-directivas/prueba-directivas-personalizadas.component';
import { PruebaNgSwitchComponent } from './components/pruebas-directivas/prueba-ng-switch.component';
import { ContainerPruebasDirectivasComponent } from './components/pruebas-directivas/container-pruebas-directivas.component';
import { appRouting } from './app.routes';
import { NuevoUsuarioComponent } from './components/pruebas-router/nuevo-usuario.component';
import { EditarUsuarioComponent } from './components/pruebas-router/editar-usuario.component';
import { DetalleUsuarioComponent } from './components/pruebas-router/detalle-usuario.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsuarioComponent } from './components/pruebas-router/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaNgStyleComponent,
    PruebaNgClassComponent,
    ResaltadoDirective,
    PruebaDirectivasPersonalizadasComponent,
    PruebaNgSwitchComponent,
    ContainerPruebasDirectivasComponent,
    NuevoUsuarioComponent,
    EditarUsuarioComponent,
    DetalleUsuarioComponent,
    NavbarComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
