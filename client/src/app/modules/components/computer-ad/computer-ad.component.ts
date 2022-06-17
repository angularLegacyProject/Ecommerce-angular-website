import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-computer-ad',
  templateUrl: './computer-ad.component.html',
  styleUrls: ['./computer-ad.component.css'],
})
export class ComputerAdComponent implements OnInit {
  allComputer: any;
  constructor(private http: HttpClient) {
    console.log(this.allComputer);
  }

  ngOnInit(): void {
    this.http.get('http://localhost:5000/product').subscribe(
      (res: any) =>
        (this.allComputer = res.filter((e: any) => {
          return e.sousCategory == 'computer';
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
