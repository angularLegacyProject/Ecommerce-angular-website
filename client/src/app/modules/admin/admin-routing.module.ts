import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from '../components/add-product/add-product.component';
import { ComputerAdComponent } from '../components/computer-ad/computer-ad.component';
import { DecorAdComponent } from '../components/decor-ad/decor-ad.component';
import { FurnitureAdComponent } from '../components/furniture-ad/furniture-ad.component';
import { HomeComponent } from '../components/home/home.component';
import { MenWComponent } from '../components/men-w/men-w.component';
import { MobileComponent } from '../components/mobile/mobile.component';
import { OrdresComponent } from '../components/ordres/ordres.component';
import { UpdateProductComponent } from '../components/update-product/update-product.component';
import { WomenWComponent } from '../components/women-w/women-w.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'addProduct', component: AddProductComponent },
      { path: 'mobiles', component: MobileComponent },
      { path: 'updateProduct/:id', component: UpdateProductComponent },
      { path: 'computer', component: ComputerAdComponent },
      { path: 'furniture', component: FurnitureAdComponent },
      { path: 'homeAndDecor', component: DecorAdComponent },
      { path: 'menWatches', component: MenWComponent },
      { path: 'womenWatches', component: WomenWComponent },
      { path: 'allOrdres', component: OrdresComponent },
      { path: '', redirectTo: '/admin', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
