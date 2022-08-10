import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-double-bar',
  templateUrl: './double-bar.component.html',
  styles: [
  ]
})
export class DoubleBarComponent {

  proveedoresData: ChartData<'bar'>  = {
    labels: ['2021', '2022','2023','2024','2025'],
    datasets: [
      { data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
      { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
    ]
  };
  
  
  public productoData: ChartData<'bar'>  = {
    labels: ['2021', '2022','2023','2024','2025'],
    datasets: [{ data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: 'blue' },]
  };
}
