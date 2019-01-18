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
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    
  }

  salvar(){
    this.usuarioService.salvar(this.usuario).subscribe(response => {
      alert("Usuário Salvo com Sucesso!");
    },
    error => {
      alert("Aconteceu algo de errado!");
      console.log(error);
    })
  }

  notSemicolon(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode == 59)) {
      return false;
    }
    return true;

  }
}
