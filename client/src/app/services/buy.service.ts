import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class BuyService {
  helper = new JwtHelperService();
  array: any = JSON.parse(localStorage.getItem('cartShop') || '[]');
  constructor() {}

  addItem(obj: any) {
    this.array.push(obj);
    localStorage.setItem('cartShop', JSON.stringify(this.array));
    console.log(this.array);
  }
  getUserId() {
    let token: any = localStorage.getItem('token');
    let decodedToken = this.helper.decodeToken(token);
    return decodedToken.id;
  }
}
