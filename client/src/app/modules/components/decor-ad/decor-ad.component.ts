import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-decor-ad',
  templateUrl: './decor-ad.component.html',
  styleUrls: ['./decor-ad.component.css'],
})
export class DecorAdComponent implements OnInit {
  allComputer: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:5000/product').subscribe(
      (res: any) =>
        (this.allComputer = res.filter((e: any) => {
          return e.sousCategory == 'Home Decor';
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
