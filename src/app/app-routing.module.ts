import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent} from 'c:/Users/swago/customermanagment/src/app/customer-list/customer-list.component';
import { MapViewComponent} from 'c:/Users/swago/customermanagment/src/app/map-view/map-view.component';
import { OrderComponent} from 'c:/Users/swago/customermanagment/src/app/order/order.component';

//import { LoginComponent } from './pages/login/login.component';
 const routes: Routes = [
  {
    path: "customer_list",
    component: CustomerListComponent,
    data: {title: ''},
  },
  
  {
    path: "map-view",
    component: MapViewComponent,
    data: {title: ''}
  },
  {
    path: "order",
    component: OrderComponent,
    data: {title: ''}
  },
  {
    path: "order",
    component: OrderComponent,
    data: {title: ''}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CustomerListComponent,MapViewComponent,OrderComponent]
