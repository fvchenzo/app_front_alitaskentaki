import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdmindetallepedidoService {

  constructor(private readonly http: HttpClient) { }

  __getDetallePedidoPorUsuarioYPedido(idusuario: number, idpedido: number) {
    //return this.http.get('/api/project/GetProject');
    return this.http.get('https://localhost:44327/api/adminpedido/obteneradminpedidoporusuarioypedido?idusuario='+idusuario+'&idpedido='+idpedido);
  }
}
