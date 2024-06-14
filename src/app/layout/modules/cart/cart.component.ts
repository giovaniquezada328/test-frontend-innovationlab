import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartInterface } from '../../../shared/interfaces/cartInterface';

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
