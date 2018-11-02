import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NuevoUsuarioComponent } from './components/usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './components/usuario/editar-usuario.component';
import { DetalleUsuarioComponent } from './components/usuario/detalle-usuario.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },

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