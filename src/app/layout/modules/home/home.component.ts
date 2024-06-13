import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../../shared/services/services.service';
import { OffersInterface } from '../../../shared/interfaces/offerInterface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  offers: OffersInterface[] = [];
  lastVisit: OffersInterface[] = [];
  category: any[] = [
    {
      title: 'Llantas',
      img: '../../../../assets/img/1.png',
    },
    {
      title: 'Frenos',
      img: '../../../../assets/img/1.png',
    },
    {
      title: 'Rines',
      img: '../../../../assets/img/1.png',
    },
    {
      title: 'Baterias',
      img: '../../../../assets/img/1.png',
    },
    {
      title: 'Asientos',
      img: '../../../../assets/img/1.png',
    },

  ];
  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.fillOffers();
    this.fillLastVisit();
  }

  fillOffers() {
    this.servicesService.getOffers()
    .subscribe(
      {
        next: async (res: any) => {
          this.offers = res.content;
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  fillLastVisit() {
    this.servicesService.getLastVisit()
    .subscribe(
      {
        next: async (res: any) => {
          this.lastVisit = res.content;
        },
        error: err => {
          console.log(err);
        }
      }
    );

  }

}
