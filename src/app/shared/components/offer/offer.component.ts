import { Component, Input, OnInit } from '@angular/core';
import { OffersInterface } from '../../interfaces/offerInterface';
import { Router } from '@angular/router';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  @Input() offers!: OffersInterface;
  constructor(private router: Router, private serviceService: ServicesService) { }

  ngOnInit(): void {  }

  async addCart(){
    await this.serviceService.saveCartItem(this.offers);
    this.router.navigateByUrl('/layout/cart');
  }
}
