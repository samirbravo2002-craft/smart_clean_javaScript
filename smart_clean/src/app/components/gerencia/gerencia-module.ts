import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GerenciaRoutingModule } from './gerencia-routing-module';
import { Gerencia } from './gerencia';
import { ServiciosYPrecios } from '../servicios-y-precios/servicios-y-precios';
import { Empleados } from '../empleados/empleados';
import { Clientes } from '../clientes/clientes';

@NgModule({
  declarations: [Gerencia, ServiciosYPrecios, Empleados, Clientes],
  imports: [
    CommonModule,
    GerenciaRoutingModule,
    FormsModule
  ],
})
export class GerenciaModule{}