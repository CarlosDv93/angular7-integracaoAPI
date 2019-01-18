import { UsuarioService } from './../usuario.service';
import { Usuario } from './../usuario';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [ConfirmationService]
})
export class UsuarioComponent implements OnInit {

  public usuarios: Usuario[] ;

  constructor(
    private usuarioService : UsuarioService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.listaUsuario();
  }

  public listaUsuario(){
    this.usuarioService.listaUsuario().subscribe(response => {
      this.usuarios = response;
    }, 
    error => {
      alert("Aconteceu Algo");
      console.log(error);
    });
  }

  public deletar(id:string){

    this.confirmationService.confirm({
      message: "Tem Certeza que deseja deletar o registro?",
      accept : () => {
        this.usuarioService.delete(id).subscribe(response => {
          alert("Usuário Deletado com Sucesso");
          this.listaUsuario();
        })
      }
    })


  }

}
