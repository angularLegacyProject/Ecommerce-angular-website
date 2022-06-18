import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  collapsed = true;
  userExist = false;
  username: any;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  constructor(public auth: AuthService) {}

  ngOnInit() {
    this.username = this.auth.getusername();
    if (this.username) {
      this.userExist = true;
    }
  }
}
