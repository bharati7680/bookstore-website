import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../gaurds/auth.guard';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  {path: "", component: OrderListComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
