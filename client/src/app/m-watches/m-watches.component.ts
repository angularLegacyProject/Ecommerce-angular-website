import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-m-watches',
  templateUrl: './m-watches.component.html',
  styleUrls: ['./m-watches.component.css']
})
export class MWatchesComponent implements OnInit {

  allComputer:any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5000/product').subscribe(
      (res: any) =>
        (this.allComputer = res.filter((e: any) => {
          return e.sousCategory == 'Men Watches';
        }))
    );
  }

}
