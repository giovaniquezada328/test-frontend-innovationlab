import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { OffersInterface } from '../interfaces/offerInterface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  api: string = environment.api;
  token = localStorage.getItem('token');
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.token);
  constructor(private http: HttpClient) { }

  getOffers() {
    return this.http.get(`${this.api}/api/getProductosOferta/?format=json`, {  headers: this.headers });
  }

  getLastVisit() {
    return this.http.get(`${this.api}/api/getProductosUltimaVisita/?format=json`, {  headers: this.headers });
  }

  searchProducts(){
    return this.http.get(`${this.api}/api/searchAutoparteV3/?categoriaSeleccionada=undefined&limit=20&marcasSeleccionadas=&search=jetta+2023&vehiculo=`, {  headers: this.headers });
  }

  getBrands() {
    return this.http.get(`${this.api}/api/getMarcasVehiculos/?format=json`, {  headers: this.headers });
  }




}
