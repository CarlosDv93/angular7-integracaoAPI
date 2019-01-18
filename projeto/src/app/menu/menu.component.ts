import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  public items : MenuItem[];
  constructor() { 
  }
  
  ngOnInit() {
    this.items = [{
      label: 'Home',
      items: [
        {label: 'Home', icon: 'pi pi-home', routerLink: 'home'}
      ]
    },
    {
      label: 'Usuários',
      icon: 'pi pi-user',
      routerLink: 'usuario'
    }];
  }
  

}
