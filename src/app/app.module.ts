import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { PruebaCicloVidaComponent } from './components/pruebas-ciclo-vida/prueba-ciclo-vida/prueba-ciclo-vida.component';
import { PruebaNgIfThenElseComponent } from './components/pruebas-directivas/prueba-ng-if-then-else.component';
import { ValidacionBasicaPorTemplateComponent } from './components/pruebas-formularios/validacion-basica-por-template/validacion-basica-por-template.component';
import { ContainerPruebasFormulariosComponent } from './components/pruebas-formularios/container-pruebas-formularios.component';
import { ValidacionBasicaPorCodigoComponent } from './components/pruebas-formularios/validacion-basica-por-codigo/validacion-basica-por-codigo.component';
import { ComponentePadreComponent } from './components/pruebas-pasando-datos/componente-padre.component';
import { ComponenteHijoComponent } from './components/pruebas-pasando-datos/componente-hijo.component';
import { ContainerPruebasPasandoDatosComponent } from './components/pruebas-pasando-datos/container-pruebas-pasando-datos.component';
import { ContainerPruebasRxjsComponent } from './components/pruebas-rxjs/container-pruebas-rxjs.component';
import { InterconectandoDatosServiciosComponent } from './components/pruebas-pasando-datos/interconectando-datos-servicios.component';
import { BisnietoComponent } from './components/pruebas-pasando-datos/pruebas-changeDetections/bisnieto/bisnieto.component';
import { PadreComponent } from './components/pruebas-pasando-datos/pruebas-changeDetections/padre/padre.component';
import { HijoComponent } from './components/pruebas-pasando-datos/pruebas-changeDetections/hijo/hijo.component';
import { NietoComponent } from './components/pruebas-pasando-datos/pruebas-changeDetections/nieto/nieto.component';

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
    UsuarioComponent,
    PruebaCicloVidaComponent,
    PruebaNgIfThenElseComponent,
    ValidacionBasicaPorTemplateComponent,
    ContainerPruebasFormulariosComponent,
    ValidacionBasicaPorCodigoComponent,
    ComponentePadreComponent,
    ComponenteHijoComponent,
    ContainerPruebasPasandoDatosComponent,
    ContainerPruebasRxjsComponent,
    InterconectandoDatosServiciosComponent,
    PadreComponent,
    HijoComponent,
    NietoComponent,
    BisnietoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
