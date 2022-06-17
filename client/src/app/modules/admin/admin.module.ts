import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from '../components/header/header.component';
import { HomeComponent } from '../components/home/home.component';
import { FooterAdComponent } from '../components/footer-ad/footer-ad.component';
import { AddProductComponent } from '../components/add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ComputerAdComponent } from '../components/computer-ad/computer-ad.component';
import { FurnitureAdComponent } from '../components/furniture-ad/furniture-ad.component';
import { DecorAdComponent } from '../components/decor-ad/decor-ad.component';
import { MenWComponent } from '../components/men-w/men-w.component';
import { WomenWComponent } from '../components/women-w/women-w.component';
import { OrdresComponent } from '../components/ordres/ordres.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterAdComponent,
    AddProductComponent,
    ComputerAdComponent,
    FurnitureAdComponent,
    DecorAdComponent,
    MenWComponent,
    WomenWComponent,
    OrdresComponent
  ],
  imports: [CommonModule, AdminRoutingModule, NgbModule, HttpClientModule],
})
export class AdminModule {}
