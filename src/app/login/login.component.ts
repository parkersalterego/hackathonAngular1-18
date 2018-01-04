import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: string;
  password: string;
  name: string;
  email: string;
  loginUser: [User];

  constructor(private user: User, private userService: UserService, private router: Router) {

  }

  ngOnInit() {
    const user: User = {
      username: this.username,
      password: this.password,
      name: this.name,
      email: this.email

    };

  }

  onLoginSubmission() {
    // console.log(this.username);

    }

  }
