import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartInterface } from '../../interfaces/cartInterface';

@Component({
  selector: 'app-items-cart',
  templateUrl: './items-cart.component.html',
  styleUrls: ['./items-cart.component.scss']
})
export class ItemsCartComponent implements OnInit {
  @Input() item!: CartInterface;
  @Output() delete = new EventEmitter();
  @Output() refreshCart = new EventEmitter();
  Cart: CartInterface[] = [];
  constructor() { }

  ngOnInit(): void {
    this.Cart = JSON.parse(localStorage.getItem('Cart')!);
  }

  add(item: CartInterface) {
    console.log(item);
    item.itemQunatity = item.itemQunatity + 1;
    for (let i = 0; i <= this.Cart.length - 1; i++) {
      if (this.Cart[i].item.id === item.item.id) {
        this.Cart[i].itemQunatity = item.itemQunatity;
        this.Cart[i].itemTotalPrice = item.item.precio * item.itemQunatity;
        this.item = this.Cart[i];
      }
    }
    localStorage.setItem('Cart', JSON.stringify(this.Cart));
    this.refreshCart.emit(true);
  }

  remove(item: CartInterface) {
    if (item.itemQunatity > 1) {
      item.itemQunatity = item.itemQunatity - 1;
      for (let i = 0; i <= this.Cart.length - 1; i++) {
        if (this.Cart[i].item.id === item.item.id) {
          this.Cart[i].itemQunatity = item.itemQunatity;
          this.Cart[i].itemTotalPrice = item.item.precio * item.itemQunatity;
          this.item = this.Cart[i];
        }
      }
      localStorage.setItem('Cart', JSON.stringify(this.Cart));
      this.refreshCart.emit(true);
    }
  }

  deleteItem(item: CartInterface) {
    for (let i = 0; i <= this.Cart.length - 1; i++) {
      if (this.Cart[i].item.id === item.item.id) {
          this.Cart.splice(i, 1);
        // this.callFunction();
        if (this.Cart.length === 0) {
          localStorage.removeItem('Cart');
          // this.noOfItems = null;
          // this.isCart = false;
        } else {
          localStorage.setItem('Cart', JSON.stringify(this.Cart));
          this.Cart = JSON.parse(localStorage.getItem('Cart')!);
          // this.noOfItems = this.noOfItems - 1;
        }
        this.delete.emit(true);
      }
    }
  }

}
