import {Component, OnInit} from '@angular/core';
import { NgSimpleSidebarService, SimpleSidebarPosition, SimpleSidebarItem } from 'ng-simple-sidebar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private ngSimpleSidebarService: NgSimpleSidebarService) {}

  sidebarItems: SimpleSidebarItem[] = [];

  ngOnInit() {
    this.sidebarItems = [
      {
        name: 'Welcome',
        icon: 'las la-home',
        routerLink: ['/welcome'],
        position: SimpleSidebarPosition.top
      },
      {
        name: 'About',
        icon: 'las la-address-book',
        routerLink: ['/about'],
        position: SimpleSidebarPosition.top
      },
    ];
    // required, configure items
    this.ngSimpleSidebarService.addItems(this.sidebarItems);

    // required, configure icons
    this.ngSimpleSidebarService.configure({
      openIcon: 'las la-bars',
      closeIcon: 'las la-times',
    });
  }
}
