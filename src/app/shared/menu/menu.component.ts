import { Component, OnInit } from '@angular/core';

interface MenuItem {
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class MenuComponent {
  menu: MenuItem[] = [
    {
      ruta: 'graphics/bar',
      texto: 'Barras'
    },
    {
      ruta: 'graphics/double-bar',
      texto: 'Barras dobles'
    },
    {
      ruta: 'graphics/donut',
      texto: 'Dona'
    },
    {
      ruta: 'graphics/donut-http',
      texto: 'Dona Http'
    },
  ];
}
