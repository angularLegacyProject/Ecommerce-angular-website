import { Component, OnInit } from '@angular/core';
// import {AllProducts} from "../all-products/all-products.component"
import { ProductServiceService } from '../product-service.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { BuyService } from '../services/buy.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  public oneProd: any;
  public id: any;

  constructor(
    private getOneProduct: ProductServiceService,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private auth: AuthService,
    private buy: BuyService
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      console.log(this.id); // Print the parameter to the console.
    });

    this.http
      .get(
        `
http://localhost:5000/product/${this.id}`
      )
      .subscribe((result: any) => {
        this.oneProd = result.data;
        console.log(this.oneProd);
      });
  }

  ngOnInit(): void {
    console.log(this.buy.array);
    // this.buy.addItem(this.oneProd);
  }
  get(obj:any) {
    this.buy.addItem(obj);
  }
}
