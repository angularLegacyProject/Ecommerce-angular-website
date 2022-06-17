import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { AppComponent } from './app.component';
import { ComputerComponent } from './computer/computer.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { HomeDecorComponent } from './home-decor/home-decor.component';
import { HomeComponent } from './home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { MWatchesComponent } from './m-watches/m-watches.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PhonesComponent } from './phones/phones.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SignupComponent } from './signup/signup.component';
import { WWatchesComponent } from './w-watches/w-watches.component';

const routes: Routes = [
   {path:"",component:HomeComponent},
   {path:"allProduct",component:AllProductsComponent},
   {path:"computer",component:ComputerComponent},
   {path:"mobile",component:PhonesComponent},
   {path:"furniture",component:FurnitureComponent},
   {path:"homeDecor",component:HomeDecorComponent},
   {path:"menWatches",component:MWatchesComponent},
   {path:"womenWatches",component:WWatchesComponent},
   {path:"login",component:LoginComponent},
   {path:"signup",component:SignupComponent},
   {path:"shoppingCart",component:ShoppingCartComponent},
   {path:"product/:id",component:ProductDetailsComponent},
   // {path:"admin",component:AdminLayoutComponent}
   {
    path: 'admin',
    canActivate: [],
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
