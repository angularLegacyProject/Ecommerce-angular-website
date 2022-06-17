import { Component, OnInit } from '@angular/core';
import { DataSevicesService } from '../data-sevices.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  object = {
    productName: '',
    price: null,
    description: '',
  };
  imageUrl: any;

  public item: any;
  public id: any;
  constructor(private http: HttpClient, private act: ActivatedRoute) {
    this.act.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
  }

  ngOnInit(): void {
    this.http
      .get(`http://localhost:5000/product/${this.id}`)
      .subscribe((res: any) => (this.imageUrl = res.data.imageUrl));
  }
  getProductName(event: any) {
    console.log(event.target.value);
    this.object.productName = event.target.value;
  }
  getPrice(e: any) {
    this.object.price = e.target.value;
  }
  getDescription(e: any) {
    this.object.description = e.target.value;
  }
  updateProduct() {
    this.http
      .put(`http://localhost:5000/product/${this.id}`, this.object)
      .subscribe({
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }
}
