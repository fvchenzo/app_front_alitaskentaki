import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SugerenciaService {

  constructor(private readonly http: HttpClient) { }

  __be_insertarSugerencia(data: any, headers: any) {
    return this.http.post<any>('https://localhost:44327/api/sugerencia/agregarsugerencia', data, { headers });
  }
}
