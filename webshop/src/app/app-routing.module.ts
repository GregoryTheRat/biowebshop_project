import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'shop', loadChildren: () => import('./pages/shop/shop.module').then(m => m.ShopModule) }, { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) }, { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) }, { path: 'sales', loadChildren: () => import('./pages/sales/sales.module').then(m => m.SalesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
