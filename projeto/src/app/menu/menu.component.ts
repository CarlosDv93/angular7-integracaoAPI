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
        {label: 'Home', icon: 'fa fa-plus', routerLink: 'home'}
      ]
    },
    {
      label: 'Usuários',
      items: [
        {label: 'Usuários', routerLink: 'usuario', icon: 'pi-user'}
      ]    
    }];
}
  

}
