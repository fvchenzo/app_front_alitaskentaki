import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private readonly http: HttpClient) { }

  __getProductos(){
    const params = new HttpParams()
   .set('idCategoria', (-1).toString());
   
    return this.http.get('https://localhost:44327/api/producto/obtenerproductosporcategoria', {params});
  }

  __getProductosPorCategoria(idCategoria: number){
    const params = new HttpParams()
   .set('idCategoria', idCategoria.toString());
    
    return this.http.get('https://localhost:44327/api/producto/obtenerproductosporcategoria', {params});
  }

  __getProductosPorId(idProducto: number){
    const params = new HttpParams()
   .set('idProducto', idProducto.toString());
    
    return this.http.get('https://localhost:44327/api/producto/obtenerproductoporid', {params});
  }

  __insertar(data: any){
    return this.http.post('https://localhost:44327/api/producto/insert', data);
  }

  __actualizar(IdProducto: number, data: any){
    return this.http.post('https://localhost:44327/api/producto/update?codigo=${IdProducto}', data);
  }

  __eliminar(IdProducto: number, idUsuario: number){
    const params = new HttpParams()
   .set('codigo', IdProducto.toString())
   .set('usuariomodifica', 0);
   
    return this.http.delete('https://localhost:44327/api/producto/delete', {params});
  }
}
