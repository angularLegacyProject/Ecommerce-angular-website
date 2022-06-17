import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home-decor',
  templateUrl: './home-decor.component.html',
  styleUrls: ['./home-decor.component.css']
})
export class HomeDecorComponent implements OnInit {

  allComputer:any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5000/product').subscribe(
      (res: any) =>
        (this.allComputer = res.filter((e: any) => {
          return e.sousCategory == 'Home Decor';
        }))
    );
  }

}
