import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgChartsModule } from 'ng2-charts';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';
import { GraphicsRoutingModule } from './graphics-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';
import { DonutComponent } from './pages/donut/donut.component';
import { DoubleBarComponent } from './pages/double-bar/double-bar.component';


@NgModule({
  declarations: [
    BarsComponent,
    DoubleBarComponent,
    DonutComponent,
    DonutHttpComponent,
    BarGraphComponent
  ],
  imports: [
    CommonModule,
    GraphicsRoutingModule,
    NgChartsModule
  ]
})
export class GraphicsModule { }
