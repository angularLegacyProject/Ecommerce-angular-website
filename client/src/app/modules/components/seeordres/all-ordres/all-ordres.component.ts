import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-all-ordres',
  templateUrl: './all-ordres.component.html',
  styleUrls: ['./all-ordres.component.css'],
})
export class AllOrdresComponent implements OnInit {
  allCarts: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:5000/cart')
      .subscribe((res: any) => (this.allCarts = res));
  }

}
