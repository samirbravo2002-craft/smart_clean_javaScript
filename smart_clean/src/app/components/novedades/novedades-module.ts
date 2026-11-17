import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovedadesRoutingModule } from './novedades-routing-module';
import { NovedadInterna } from '../novedad-interna/novedad-interna';
import { Novedades } from './novedades';

@NgModule({
  declarations: [Novedades, NovedadInterna],
  imports: [CommonModule, NovedadesRoutingModule],
})
export class NovedadesModule {}
