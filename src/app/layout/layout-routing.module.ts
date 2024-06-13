import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from '../shared/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then(
            (m) => m.HomeModule
          )
      },
      {
        path: 'search',
        loadChildren: () =>
          import('./modules/search/search.module').then(
            (m) => m.SearchModule
          )
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('./modules/cart/cart.module').then(
            (m) => m.CartModule
          )
      },
      {
        path: 'payment',
        loadChildren: () =>
          import('./modules/payment/payment.module').then(
            (m) => m.PaymentModule
          )
      },
    ],
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
