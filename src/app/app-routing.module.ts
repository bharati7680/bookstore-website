import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './gaurds/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./book/book.module').then(m => m.BookModule)
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate:[AuthGuard]
  },

  {
    path: 'my-orders',
    loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m =>  m.CartModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
