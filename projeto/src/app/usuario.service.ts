import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'http://localhost:8080/usuario'

  constructor(private http: HttpClient) { }

  public getUsuario() : Usuario {
    let usuario = new Usuario();
    usuario.nome = "Carlos";
    usuario.email = "carlos@carlos.com";
    return usuario;
  }

  public listaUsuario() : Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }

  public salvar(usuario: Usuario) : Observable<Usuario> {
    return this.http.post<Usuario>(this.url, usuario);
  }
}
