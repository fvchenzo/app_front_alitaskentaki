import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private readonly http: HttpClient) { }

  __getCategorias(){
    return this.http.get('https://localhost:44327/api/categoria/obtenercategorias');
  }
}
