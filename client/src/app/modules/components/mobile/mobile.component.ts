import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css'],
})
export class MobileComponent implements OnInit {
  allMobile: any;
  itemDetail: any = {};
 
  constructor(private http: HttpClient) {}
  

  ngOnInit(): void {
    this.http.get('http://localhost:5000/product').subscribe(
      (res: any) =>
        (this.allMobile = res.filter((e: any) => {
          return e.sousCategory == 'mobile';
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
  getItemDetail(p: any) {
    this.itemDetail = p;
    // console.log(this.itemDetail)
  }
}
