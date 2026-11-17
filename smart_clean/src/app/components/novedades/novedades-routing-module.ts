import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Novedades } from './novedades';
import { NovedadInterna } from '../novedad-interna/novedad-interna';

const routes: Routes = [
  {
    path: '', 
    component: Novedades, 
    children: [
      {
        path: 'novedades_internas', 
        component: NovedadInterna
      },
      // {
      //   path: 'empleados', 
      //   component: Empleados
      // },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'novedades_internas'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovedadesRoutingModule {}
