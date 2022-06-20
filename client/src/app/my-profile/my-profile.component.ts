import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { UpdateService } from '../services/update.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent implements OnInit {
  USERname: any;
  eMail: any;
  phonenumberr: any;
  Adress: any;
  fullname: any;
  id: any;
  profilePic: any;

  constructor(
    private auth: AuthService,
    private UpdateService: UpdateService
  ) {}

  ngOnInit(): void {
    this.USERname = this.auth.getusername();
    console.log(this.USERname);
    this.eMail = this.auth.getemail();
    this.phonenumberr = this.auth.getphonenumber();
    this.Adress = this.auth.getuseradress();
    this.fullname = this.auth.getuserfullname();
    this.id = this.auth.getuserid();
    this.profilePic = this.auth.getuserPic();
  }

  update(inp: NgForm) {
    let data = inp.value;
    this.UpdateService.update(this.id, data);
  }
}
