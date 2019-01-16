import { UsuarioRoutingModule } from './usuario.routing.module';
import { UsuarioComponent } from './usuario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UsuarioComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
