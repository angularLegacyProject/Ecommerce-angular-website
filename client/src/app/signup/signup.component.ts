import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private http: HttpClient, public serv: AuthService) {}

  ngOnInit(): void {}
  auth(inp: NgForm) {
    let object = inp.value;
    this.serv.singup(object);
    console.log(inp.value);
  }
}
