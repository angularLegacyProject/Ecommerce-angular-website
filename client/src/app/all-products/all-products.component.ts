import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  public dataarray: any;
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:5000/product').subscribe((result) => {
      this.dataarray = result;
      console.log(this.dataarray);
    });
  }

  ngOnInit(): void {}
}
