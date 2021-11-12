import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PromocionService {

  constructor(private readonly http: HttpClient) { }

  __getPromociones(){
    return this.http.get('/api/promociones/getpromociones');
  }
}