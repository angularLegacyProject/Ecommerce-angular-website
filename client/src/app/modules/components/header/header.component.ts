import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  constructor(public auth: AuthService) {}

  ngOnInit() {}
}
