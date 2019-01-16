import { UsuarioService } from './../usuario.service';
import { Usuario } from './../usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuarios: Usuario[] ;

  constructor(
    private usuarioService : UsuarioService
  ) { }

  ngOnInit() {
    this.usuarios = this.usuarioService.listaUsuario();
  }

}
