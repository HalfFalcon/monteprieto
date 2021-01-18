import {Component, OnInit} from '@angular/core';
import { NgSimpleSidebarService, SimpleSidebarPosition, SimpleSidebarItem } from 'ng-simple-sidebar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private ngSimpleSidebarService: NgSimpleSidebarService) {}

  sidebarItems: SimpleSidebarItem[] = [
    {
      name: 'Home',
      icon: 'las la-home',
      routerLink: [''],
      position: SimpleSidebarPosition.top
    },
    {
      name: 'The Center',
      icon: 'las la-sun',
      routerLink: ['/the-center'],
      position: SimpleSidebarPosition.top
    },
    {
      name: 'The Land',
      icon: 'las la-tree',
      routerLink: ['/the-land'],
      position: SimpleSidebarPosition.top
    },
    {
      name: 'Sustainable Ranching',
      icon: 'las la-globe-americas',
      routerLink: ['/sustainable-ranching'],
      position: SimpleSidebarPosition.top
    },
    {
      name: 'Our History',
      icon: 'las la-hat-cowboy-side',
      routerLink: ['/our-history'],
      position: SimpleSidebarPosition.top
    },
  ];

  ngOnInit(): void {
    // required, configure items
    this.ngSimpleSidebarService.addItems(this.sidebarItems);

    // required, configure icons
    this.ngSimpleSidebarService.configure({
      openIcon: 'las la-bars',
      closeIcon: 'las la-times',
    });
  }
}
