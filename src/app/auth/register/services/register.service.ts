import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  api: string = environment.api;
  token = localStorage.getItem('token');
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'token ' + this.token);
  constructor(private http: HttpClient) { }

  register(data: any) {
    return this.http.post(`${this.api}/api/crearVendedor/`, data, {  headers: this.headers });
  }
}
