import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BuyService } from '../services/buy.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  userExist: any;
  arrayProd = this.buy.array;
  userId = this.buy.getUserId();

  cart = { userId: this.userId, products: this.arrayProd };
  constructor(
    private auth: AuthService,
    private buy: BuyService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    console.log(this.userId);
    console.log(this.arrayProd, 'yhgytyhgtyhgty');
  }
  postCart() {
    let products = this.arrayProd.map((e: any) => {
      return { productId: e._id };
    });
    console.log(products, 'proporprorprorpro');
    this.http
      .post('http://localhost:5000/cart', {
        userId: this.userId,
        products: products,
      })
      .subscribe({
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
    localStorage.setItem('cartShop', JSON.stringify([]));
    location.reload();
  }
}
