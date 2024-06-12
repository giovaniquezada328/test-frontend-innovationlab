import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  @Input() module!: string;
  totalCart = 1;
  totalNotifications = '10';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(url: string):void {
    this.router.navigateByUrl(url);
  }

}
