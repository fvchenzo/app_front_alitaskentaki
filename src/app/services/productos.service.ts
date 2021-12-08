import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private readonly http: HttpClient) { }

  __getProductos(){
    return this.http.get('/api/productos/getProductos');
  }

  __getProductosPorCategoria(idCategoria: number){
    const params = new HttpParams()
   .set('idCategoria', idCategoria.toString());
    
    return this.http.get('https://localhost:44327/api/producto/obtenerproductosporcategoria', {params});
  }
}
