import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosYPrecios } from '../servicios-y-precios/servicios-y-precios';
import { Empleados } from '../empleados/empleados';
import { Clientes } from '../clientes/clientes';
import { Gerencia } from './gerencia';

const routes: Routes = [
  {
    path: '', 
    component: Gerencia, 
    children: [
      {
        path: 'servicios', 
        component: ServiciosYPrecios
      },
      {
        path: 'empleados', 
        component: Empleados
      },
      {
        path: 'clientes',
        component: Clientes
      },
      {
        path: '', 
        redirectTo: 'empleados', 
        pathMatch: 'full' 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class GerenciaRoutingModule {}
