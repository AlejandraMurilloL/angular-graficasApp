import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';
import { GraphicsService } from '../../services/graphics.service';

@Component({
  selector: 'app-donut-http',
  templateUrl: './donut-http.component.html',
  styles: [
  ]
})
export class DonutHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [ ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: []
  };

  constructor(private graphicsService: GraphicsService) { }

  ngOnInit(): void {
    // this.graphicsService.getUsersBySocialNetwork().subscribe((data) => {
    //   const labels = Object.keys(data);
    //   const values: number[] = Object.values(data);
    //   this.doughnutChartData.labels = labels;
    //   this.doughnutChartData.datasets.push({data: values});
    // });
    this.graphicsService.getInfoUsersBySocialNetwork().subscribe(({labels, values}) => {
      this.doughnutChartData.labels = labels;
      this.doughnutChartData.datasets.push({data: values});
    });
  }

}
