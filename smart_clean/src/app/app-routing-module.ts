import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Reservas } from './components/reservas/reservas';
import { Home } from './home/home';

import { Login } from './login/login';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Home
  },
  {
    path: 'home',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'reservas',
    component: Reservas
  },
  {
    path: 'novedades',
    loadChildren: () => import('./components/novedades/novedades-module').then(m => m.NovedadesModule)
  },
  {
    path: 'gerencia',
    loadChildren: () => import('./components/gerencia/gerencia-module').then(m => m.GerenciaModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
