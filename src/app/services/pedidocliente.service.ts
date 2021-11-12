import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidoclienteService {

  constructor(private readonly http: HttpClient) { }

  __getPedidosCliente(){
    return this.http.get('/api/pedidocliente/getpedidoscliente');
  }
}
