import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private readonly http: HttpClient) { }

  __getLocales(){
    //return this.http.get('/api/locales/getlocales');
    return this.http.get('https://localhost:44327/api/local/obtenerlocales');
  }

}
