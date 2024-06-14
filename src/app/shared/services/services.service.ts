import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { OffersInterface } from '../interfaces/offerInterface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartInterface } from '../interfaces/cartInterface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  Cart: CartInterface[] = [];
  itemCart: any = {};
  itemInCart: any[] = [];
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

  saveCartItem(item: OffersInterface) {
    this.Cart = JSON.parse(localStorage.getItem('Cart')!);
    let ExtotalPrice: number = 0;
    let totalPrice: number = 0;
    this.itemInCart = [];
    let itemQunatity = 1;
    console.log(item);
    if (this.Cart === null) {
      this.itemCart.itemTotalPrice = Number(item.precio) * itemQunatity;
      this.itemCart.itemQunatity = itemQunatity;
      this.itemCart.item = item;
      this.itemInCart.push(this.itemCart);
      localStorage.setItem('Cart', JSON.stringify(this.itemInCart));
    } else {
      for (let i = 0; i <= this.Cart.length - 1; i++) {
        if (
          this.Cart[i].item.id === item.id) {
            itemQunatity= this.Cart[i].itemQunatity + 1;
            this.Cart.splice(i, 1);
        }
      }
      this.itemCart.itemQunatity =  itemQunatity;
      this.itemCart.itemTotalPrice = item.precio * itemQunatity;
      this.itemCart.item = item;
      this.Cart.push(this.itemCart);
      localStorage.setItem('Cart', JSON.stringify(this.Cart));
    }
  }




}
