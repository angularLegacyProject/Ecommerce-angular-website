import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent implements OnInit {
  username: any;
  email: any;
  phonenumber: any;
  adress: any;
  fullname: any;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.username = this.auth.getusername();
    this.email = this.auth.getemail();
    this.phonenumber = this.auth.getphonenumber();
    this.adress = this.auth.getuseradress();
    this.fullname = this.auth.getuserfullname();
  }
}
