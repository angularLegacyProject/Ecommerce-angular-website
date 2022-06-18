import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css'],
})
export class OneProductComponent implements OnInit {
  product: any;
  @Input() prod: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(`http://localhost:5000/product/${this.prod.productId}`)
      .subscribe((res: any) => this.product=res.data);
      console.log(this.prod,"from one prod")
  }
}
