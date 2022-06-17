import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-w-watches',
  templateUrl: './w-watches.component.html',
  styleUrls: ['./w-watches.component.css']
})
export class WWatchesComponent implements OnInit {

  allComputer:any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5000/product').subscribe(
      (res: any) =>
        (this.allComputer = res.filter((e: any) => {
          return e.sousCategory == 'Women Watches';
        }))
    );
  }

}
