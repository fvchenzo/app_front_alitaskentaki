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

  __getCarritoCliente(idUsuario: number){
    const params = new HttpParams()
   .set('idUsuario', idUsuario.toString());
    return this.http.get('https://localhost:44327/api/carrito/obtenercarritoporusuario', {params});
  }
}
