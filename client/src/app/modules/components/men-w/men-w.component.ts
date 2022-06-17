import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-men-w',
  templateUrl: './men-w.component.html',
  styleUrls: ['./men-w.component.css']
})
export class MenWComponent implements OnInit {

  allComputer: any;
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('http://localhost:5000/product').subscribe(
      (res: any) =>
        (this.allComputer = res.filter((e: any) => {
          return e.sousCategory == 'Men Watches';
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
