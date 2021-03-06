import { RouterModule, Routes } from '@angular/router';
import { ContainerPruebasDirectivasComponent } from './components/pruebas-directivas/container-pruebas-directivas.component';
import { UsuarioComponent } from './components/pruebas-router/usuario.component';
import { NuevoUsuarioComponent } from './components/pruebas-router/nuevo-usuario.component';
import { EditarUsuarioComponent } from './components/pruebas-router/editar-usuario.component';
import { DetalleUsuarioComponent } from './components/pruebas-router/detalle-usuario.component';
import { PruebaCicloVidaComponent } from './components/pruebas-ciclo-vida/prueba-ciclo-vida/prueba-ciclo-vida.component';
import { ContainerPruebasFormulariosComponent } from './components/pruebas-formularios/container-pruebas-formularios.component';
import { ContainerPruebasPasandoDatosComponent } from './components/pruebas-pasando-datos/container-pruebas-pasando-datos.component';
import { ContainerPruebasRxjsComponent } from './components/pruebas-rxjs/container-pruebas-rxjs.component';

const routes: Routes = [
    { path: 'home', component: ContainerPruebasDirectivasComponent },

    {
        path: 'usuario/:idUsuario',
        component: UsuarioComponent,
        children: [
            //Se podría llevar este array (const rutasUsuario:Routes = ....) a otro archivo dentro de carpeta "usuario", por ejemplo, importarlo y add aquí.
            { path: 'nuevo', component: NuevoUsuarioComponent },
            { path: 'editar', component: EditarUsuarioComponent },
            { path: 'detalle', component: DetalleUsuarioComponent },
            { path: '**', redirectTo: 'nuevo' }
        ]
    },

    { path: 'ciclovida', component: PruebaCicloVidaComponent },
    { path: 'formularios', component: ContainerPruebasFormulariosComponent },
    { path: 'pasandodatos', component: ContainerPruebasPasandoDatosComponent },
    { path: 'rxjs', component: ContainerPruebasRxjsComponent },

    { path: '**', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);