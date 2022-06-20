import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-one-ordre',
  templateUrl: './one-ordre.component.html',
  styleUrls: ['./one-ordre.component.css'],
})
export class OneOrdreComponent implements OnInit {
  user: any;
  @Input() cart: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(`http://localhost:5000/user/${this.cart.userId}`)
      .subscribe((res) => (this.user = res));
  }
  confirmOrdres() {
    this.http.delete(`http://localhost:5000/cart/${this.cart._id}`).subscribe({
      error: (error) => {
      },
    });
    location.reload();
  }
}
