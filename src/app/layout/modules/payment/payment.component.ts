import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartInterface } from '../../../shared/interfaces/cartInterface';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  form!: FormGroup;
  statesData =
  [
    'Aguascalientes',
    'Baja California',
    'Baja California Sur',
    'Campeche',
    'Chiapas',
    'Chihuahua',
    'Coahuila de Zaragoza',
    'Colima',
    'Ciudad de México',
    'Durango',
    'Guanajuato',
    'Guerrero',
    'Hidalgo',
    'Jalisco',
    'Estado de Mexico',
    'Michoacan de Ocampo',
    'Morelos',
    'Nayarit',
    'Nuevo Leon',
    'Oaxaca',
    'Puebla',
    'Queretaro de Arteaga',
    'Quintana Roo',
    'San Luis Potosi',
    'Sinaloa',
    'Sonora',
    'Tabasco',
    'Tamaulipas',
    'Tlaxcala',
    'Veracruz de Ignacio de la Llave',
    'Yucatan',
    'Zacatecas',
  ];
  Cart: CartInterface[] = [];
  noOfItems: number = 0;
  isCart: boolean = false;
  subTotal: number = 0;
  shipment: number = 0;
  total: number = 0;
  constructor(
    private route: Router,
    private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      street: ['', [Validators.required]],
      numberOutside: ['', [Validators.required]],
      numberInside: ['', [Validators.required]],
      colony: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
    });
    this.Cart = JSON.parse(localStorage.getItem('Cart')!);
    console.log(this.Cart);
    if (this.Cart !== null) {
      this.noOfItems = this.Cart.length;
      this.isCart = true;
    } else {
      this.isCart = false;
    }
    this.getTotal();
  }
  navigate(url: string){
    this.route.navigateByUrl(url);
  }

  getTotal() {
    let subTotal = 0;
    if(this.Cart){
      for (let i = 0; i <= this.Cart.length - 1; i++) {
        subTotal = subTotal + this.Cart[i].itemTotalPrice;
      }

      this.subTotal = Number(subTotal.toFixed(2));
      this.shipment = this.subTotal *0.05;
      this.total = Number(this.subTotal.toFixed(2)) + Number(this.shipment);
    } else {
      this.subTotal = 0;
      this.shipment = 0;
      this.total = 0;
    }

  }

}
