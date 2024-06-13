import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../../shared/services/services.service';
import { OffersInterface } from '../../../shared/interfaces/offerInterface';
import { OrderDataInterface } from '../../../shared/interfaces/orderDataInterface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  products: OffersInterface[] = [];
  selectData: OrderDataInterface[] = [
    {value: 'price1', viewValue: 'Menor Precio'},
    {value: 'price2', viewValue: 'Mayor Precio'},
    {value: 'date', viewValue: 'Fecha'}
  ];
  selected = 'price1';
  brands: any[] = [];
  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.fillSearch();
    this.fillBrands();
  }

  fillSearch() {
    this.servicesService.searchProducts()
    .subscribe(
      {
        next: async (res: any) => {
          this.products = res.results;
          console.log(this.products);
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  fillBrands() {
    this.servicesService.getBrands()
    .subscribe(
      {
        next: async (res: any) => {
          console.log(res);
          this.brands = res.content;
          console.log(this.brands);
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

}
