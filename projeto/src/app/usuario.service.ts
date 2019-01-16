import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public getUsuario() : Usuario {
    let usuario = new Usuario();
    usuario.nome = "Carlos";
    usuario.email = "carlos@carlos.com";
    return usuario;
  }

  public listaUsuario() : Usuario[] {
    return [
      {
        nome: "carlos",
        email: "carlos@carlos.com"
      },
      {
        nome: "maria",
        email: "maria@maria.com"
      },
      {
        nome: "carlos",
        email: "carlos@carloscarlos.com"
      },
      {
        nome: "shirley",
        email: 'shirley@shirley.com'
      }
    ]
  }
}
