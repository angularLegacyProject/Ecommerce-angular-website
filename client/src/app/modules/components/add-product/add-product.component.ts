import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  object = {
    productName: '',
    category: '',
    sousCategory: '',
    price: null,
    imageUrl: '',
    description: '',
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  get() {
    console.log(this.object);
  }
  getProductName(event: any) {
    console.log(event.target.value);
    this.object.productName = event.target.value;
  }
  getCategory(e: any) {
    this.object.category = e.target.value;
  }
  getSousCategory(e: any) {
    this.object.sousCategory = e.target.value;
  }
  getPrice(e: any) {
    this.object.price = e.target.value;
  }
  getImageUrl(e: any) {
    this.object.imageUrl = e.target.value;
  }
  getDescription(e: any) {
    this.object.description = e.target.value;
  }
  createProduct() {
    this.http
      .post<any>('http://localhost:5000/product', this.object)
      .subscribe({
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }
}
