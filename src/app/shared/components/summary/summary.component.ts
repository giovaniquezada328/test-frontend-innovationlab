import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  @Input() noOfItems!: number;
  @Input() subTotal!: number;
  @Input() shipment!: number;
  @Input() total!: number;
  @Input() module!: string;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navigate(url: string){
    this.route.navigateByUrl(url);
  }

}
