import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  loginInputs;
  constructor() { 

  }

  ngOnInit() {
    this.loginInputs = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  onLoginSubmission() {
    console.log('Your username is ' + this.username);
  }

}
