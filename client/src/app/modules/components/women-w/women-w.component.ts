import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-women-w',
  templateUrl: './women-w.component.html',
  styleUrls: ['./women-w.component.css'],
})
export class WomenWComponent implements OnInit {
  allComputer: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:5000/product').subscribe(
      (res: any) =>
        (this.allComputer = res.filter((e: any) => {
          return e.sousCategory == 'Women Watches';
        }))
    );
  }
  deleteitem(id: any) {
    this.http.delete(`http://localhost:5000/product/${id}`).subscribe({
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
    this.ngOnInit();
  }
}
