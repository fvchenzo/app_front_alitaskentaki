import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminpedidoService {

  constructor(private readonly http: HttpClient) { }

  __getPedidos() {
    //return this.http.get('/api/project/GetProject');
    return this.http.get('https://localhost:44327/api/adminpedido/obteneradminpedidos');
  }

  __modificarEstado(idpedido: any) {
    const params = new HttpParams()
   .set('idpedido', idpedido.toString());
    return this.http.get('https://localhost:44327/api/adminpedido/modificarestado',{params});
  }
}
