import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {
allComputer:any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5000/product').subscribe(
      (res: any) =>
        (this.allComputer = res.filter((e: any) => {
          return e.sousCategory == 'computer';
        }))
    );
  }

}
