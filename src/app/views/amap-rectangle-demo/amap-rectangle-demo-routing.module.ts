import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MethodsComponent } from './methods/methods.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/amap-rectangle/methods',
    pathMatch: 'full',
  },
  {
    path: 'methods',
    component: MethodsComponent,
    data: {
      title: '调用方法'
    }
  },
  {
    path: 'events',
    component: EventsComponent,
    data: {
      title: '事件'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmapRectangleDemoRoutingModule { }
