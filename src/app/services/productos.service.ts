import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private readonly http: HttpClient) { }

  __getProductos(){
    return this.http.get('/api/productos/getProductos');
  }


}
