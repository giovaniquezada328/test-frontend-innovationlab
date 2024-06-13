import { Component, Input, OnInit } from '@angular/core';
import { OffersInterface } from '../../interfaces/offerInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  @Input() offers!: OffersInterface;
  constructor(private router: Router) { }

  ngOnInit(): void {  }

  addCart(){
    this.router.navigateByUrl('/layout/cart');
  }
}
