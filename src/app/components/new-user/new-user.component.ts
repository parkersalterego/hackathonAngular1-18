import { Component, OnInit } from '@angular/core';
import { ValidateUserService } from '../../services/validate-user.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
    name: string;
    email: string;
    username: string;
    password: string;

  constructor(
    private validateUserService: ValidateUserService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  onRegisterSubmit() {
    const user: User = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    };

    // required fields
    if (!this.validateUserService.validateRegister(user)) {
      console.log('please fill in all fields');
      return false;
    }

    // Validate email

    if (!this.validateUserService.validateEmail(user.email)) {
      console.log('Please use a valid email');
      return false;
    }

    this.userService.addUser(user);
    this.router.navigate(['/current-guests']);
  }

}
