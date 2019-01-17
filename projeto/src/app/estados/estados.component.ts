import { Component, OnInit } from '@angular/core';
import { EstadosService } from '../estados.service';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {

  public estados : any;
  constructor(private estadoService: EstadosService) { }

  ngOnInit() {
    this.estadoService.getEstados().subscribe(response => {
      this.estados = response;
    })
  }

}
