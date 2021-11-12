import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private readonly http: HttpClient) { }

  __getLocales(){
    return this.http.get('/api/locales/getlocales');
  }

}
