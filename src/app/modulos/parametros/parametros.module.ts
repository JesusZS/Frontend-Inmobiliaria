import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { ListarInmueblesComponent } from './inmueble/listar-inmuebles/listar-inmuebles.component';
import { CrearInmueblesComponent } from './inmueble/crear-inmuebles/crear-inmuebles.component';
import { EditarInmueblesComponent } from './inmueble/editar-inmuebles/editar-inmuebles.component';


@NgModule({
  declarations: [
    EliminarClienteComponent,
    EditarClienteComponent,
    ListarClienteComponent,
    ListarInmueblesComponent,
    CrearInmueblesComponent,
    EditarInmueblesComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule
  ]
})
export class ParametrosModule { }
