import { Component, Input, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styles: [
  ]
})
export class BarGraphComponent  {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: []
  };
  
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  
  public barChartType: ChartType = 'bar';  
}
