import { Routes } from '@angular/router';
import { ComencemosComponent } from './pages/comencemos/comencemos.component';
import { IngresarComponent } from './pages/ingresar/ingresar.component';
import { MasComponent } from './pages/mas/mas.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'comencemos',
        component: ComencemosComponent
    },
    {
        path: 'ingresar',
        component: IngresarComponent
    },
    {
        path: 'mas',
        component: MasComponent
    },
    {
        path: 'registro',
        component: RegistroComponent
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
