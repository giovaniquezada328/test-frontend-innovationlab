import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartInterface } from '../../../shared/interfaces/cartInterface';
import { OffersInterface } from '../../../shared/interfaces/offerInterface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  Cart: CartInterface[] = [];
  noOfItems: number = 0;
  isCart: boolean = false;
  subTotal: number = 0;
  shipment: number = 0;
  total: number = 0;
  together: OffersInterface[] = [
    {
      id: 18718,
      titulo: "TERMINAL DIRECCIÓN EXTERIOR DERECHA",
      precio: 324.6912,
      nombre: "TERMINAL DIRECCIÓN EXTERIOR DERECHA",
      marca: "2",
      descripcion: '',
      detalles: '',
      peso: '',
      ancho: '',
      alto: '',
      largo: '',
      imagen: "http://api.merauto.com.mx/uploads/publicacion/40-107.jpg",
      elementos_recomendados: 1,
      fecha_registro: new Date('2024-04-13'),
      sku: "40-107",
      activo: 1,
      convertida: 0,
      unique_id: "f2c1afcc-516f-46d3-8390-a29c622c4498",
      marca_autoparte: null,
      subsubcategoria: null
  },  {
    id: 14206,
    titulo: "SOPORTE DE MOTOR TRASERA SUPERIOR/TRASERA",
    precio: 399.256,
    nombre: "SOPORTE DE MOTOR TRASERA SUPERIOR/TRASERA",
    marca: "1",
    descripcion: '',
    detalles: '',
    peso: '',
    ancho: '',
    alto: '',
    largo: '',
    imagen: "http://api.merauto.com.mx/uploads/publicacion/4802.jpg",
    elementos_recomendados: 1,
    fecha_registro:  new Date('2024-04-13'),
    sku: "4802",
    activo: 1,
    convertida: 0,
    unique_id: "36f189f1-addb-4b51-904d-01056b868c3a",
    marca_autoparte: null,
    subsubcategoria: null
},
{
  id: 18719,
  titulo: "TERMINAL DIRECCIÓN EXTERIOR IZQUIERDA",
  precio: 324.6912,
  nombre: "TERMINAL DIRECCIÓN EXTERIOR IZQUIERDA",
  marca: "2",
  descripcion: '',
  detalles: '',
  peso: '',
  ancho: '',
  alto: '',
  largo: '',
  imagen: "http://api.merauto.com.mx/uploads/publicacion/40-108.jpg",
  elementos_recomendados: 1,
  fecha_registro:  new Date('2024-04-13'),
  sku: "40-108",
  activo: 1,
  convertida: 0,
  unique_id: "0a38c06a-68cc-43a8-a059-5b641dc1d39d",
  marca_autoparte: null,
  subsubcategoria: null
}  ];
  constructor(private route: Router) { }

  ngOnInit(): void {
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
  refreshCart(event: any){
    if(event) {
      this.ngOnInit();
    }
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
