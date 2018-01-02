import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  onRegisterSubmit() {
    const guest = {
      firstName: this.name,
      lastName: this.email,
      username: this.username,
      password: this.password
    };

    // required fields
    if (!this.validateGuestService.validateRegister(guest)) {
      console.log('please fill in all fields');
      return false;
    }

    // Validate email

    if (!this.validateGuestService.validateEmail(guest.email)) {
      console.log('Please use a valid email');
      return false;
    }

    this.guestsService.addGuest(guest);
    console.log(this.guestsService.currentGuests);
    this.router.navigate(['/current-guests']);
  }

}
