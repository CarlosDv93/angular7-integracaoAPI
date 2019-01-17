import { UsuarioService } from '../../usuario.service';
import { Usuario } from '../../usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./../usuario.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  public usuarios: Usuario[] ;
  public usuario : Usuario = new Usuario();
  constructor(
    
  ) { }

  ngOnInit() {
    
  }

  salvar(){
    console.log(this.usuario);
    alert("Usuário Salvo com Sucesso!");
  }

}
