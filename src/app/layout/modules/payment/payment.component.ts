import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  navigate(url: string){
    this.route.navigateByUrl(url);
  }

}
