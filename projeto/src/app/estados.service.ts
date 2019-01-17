import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  public url : string = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

  constructor(public httpClient : HttpClient) { 

  }

  public getEstados(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  }
}
