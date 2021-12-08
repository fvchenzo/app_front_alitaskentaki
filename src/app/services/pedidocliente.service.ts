import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidoclienteService {

  constructor(private readonly http: HttpClient) { }

  __getPedidosCliente(){
    return this.http.get('/api/pedidocliente/getpedidoscliente');
  }

  __getCarritoCliente(headers: any){
    return this.http.get('https://localhost:44327/api/carrito/obtenercarritoporusuario', { headers });
  }

  __getMontoCarritoCliente(headers: any){
    return this.http.get('https://localhost:44327/api/carrito/obtenermontocarritoporusuario', { headers });
  }
}
