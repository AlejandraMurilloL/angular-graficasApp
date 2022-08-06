import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarsComponent } from './pages/bars/bars.component';
import { DoubleBarComponent } from './pages/double-bar/double-bar.component';
import { DonutComponent } from './pages/donut/donut.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';

const routes: Routes = [
  { 
    path: '', 
    children: [
      { path: 'bar', component: BarsComponent },
      { path: 'double-bar', component: DoubleBarComponent },
      { path: 'donut', component: DonutComponent },
      { path: 'donut-http', component: DonutHttpComponent },
      { path: '**', redirectTo: 'bar' }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicsRoutingModule { }
