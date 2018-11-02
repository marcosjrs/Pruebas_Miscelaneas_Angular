import { RouterModule, Routes } from '@angular/router';
import { ContainerPruebasDirectivasComponent } from './components/pruebas-directivas/container-pruebas-directivas.component';
import { UsuarioComponent } from './components/pruebas-router/usuario.component';
import { NuevoUsuarioComponent } from './components/pruebas-router/nuevo-usuario.component';
import { EditarUsuarioComponent } from './components/pruebas-router/editar-usuario.component';
import { DetalleUsuarioComponent } from './components/pruebas-router/detalle-usuario.component';

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

    { path: '**', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);