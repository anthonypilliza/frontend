import { Routes } from '@angular/router';
import { Menu } from './Components/menu/menu.components';  
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
    },
    {
        path: 'menu',
        component: Menu
    }
];