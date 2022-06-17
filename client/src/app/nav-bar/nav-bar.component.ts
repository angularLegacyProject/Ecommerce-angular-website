import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  collapsed = true;
     toggleCollapsed(): void {
       this.collapsed = !this.collapsed;
     }
  constructor() { 
   }

  ngOnInit() {
  }

  

}