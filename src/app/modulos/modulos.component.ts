import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './modulos-menu';


@Component({
  selector: 'ngx-modulos',
  styleUrls: ['./modulos.component.scss'],
  template: `
  <ngx-one-column-layout>
    <nb-menu [items]="menu" autoCollapse="true"></nb-menu>
    <router-outlet></router-outlet>    
  </ngx-one-column-layout>
  
  `,
})
export class ModulosComponent implements OnInit {
  menu = MENU_ITEMS;
  constructor() {    
    
  }

  ngOnInit() {
  }

}
