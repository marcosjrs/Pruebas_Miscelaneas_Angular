import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PruebaNgStyleComponent } from './components/prueba-ng-style/prueba-ng-style.component';
import { PruebaNgClassComponent } from './components/prueba-ng-class/prueba-ng-class.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { PruebaDirectivasPersonalizadasComponent } from './components/prueba-directivas-personalizadas/prueba-directivas-personalizadas.component';
import { PruebaNgSwitchComponent } from './components/prueba-ng-switch/prueba-ng-switch.component';
import { HomeComponent } from './components/home/home.component';
import { appRouting } from './app.routes';
import { NuevoUsuarioComponent } from './components/usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './components/usuario/editar-usuario.component';
import { DetalleUsuarioComponent } from './components/usuario/detalle-usuario.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaNgStyleComponent,
    PruebaNgClassComponent,
    ResaltadoDirective,
    PruebaDirectivasPersonalizadasComponent,
    PruebaNgSwitchComponent,
    HomeComponent,
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
