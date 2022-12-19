import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("HOME", "/home"),
    new Menu("CATEGORIES", "/category/list"),
    new Menu("PRODUCTS/SERVICES", "/item/list"),
    new Menu("CREATE QUOTE", "/quote/create"),
    new Menu("LOGIN", "/login" ),
    new Menu("USERS", "users/list")
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
