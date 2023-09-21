import { NgModule } from '@angular/core';
import { ROUTES, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShowbyCategoriesComponent } from './components/home/showby-categories/showby-categories.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'products-by-categories',component:ShowbyCategoriesComponent},
  {path:'my-account',component:MyAccountComponent},
  {path:'my-cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
