import { Component, OnInit } from '@angular/core';
// import {AllProducts} from "../all-products/all-products.component"

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/product-service.service';
@Component({
  selector: 'app-proddetails-ad',
  templateUrl: './proddetails-ad.component.html',
  styleUrls: ['./proddetails-ad.component.css'],
})
export class ProddetailsAdComponent implements OnInit {
  public oneProd: any;
  public id: any;
  constructor(
    private getOneProduct: ProductServiceService,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
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

  ngOnInit(): void {}
}
