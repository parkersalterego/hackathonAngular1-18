import { Component, OnInit } from '@angular/core';
import { Guest } from '../../models/guest';
import { ValidateGuestService } from '../../services/validate-guest.service';
import { GuestsService } from '../../services/guests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-guest',
  templateUrl: './new-guest.component.html',
  styleUrls: ['./new-guest.component.css']
})


export class NewGuestComponent implements OnInit {
  constructor(
    private validateGuestService: ValidateGuestService,
    private guestsService: GuestsService,
    private router: Router
  ) { }

  currentGuests: [Guest];

  ngOnInit() {
  }

  onRegisterSubmit() {
    const guest = {
      firstName: this.firstName,
      lastName: this.lastName,
      ID: this.ID
    };

    // required fields
    if (!this.validateGuestService.validateRegister(guest)) {
      console.log('please fill in all fields');
      return false;
    }

    this.guestsService.addGuest(guest).subscribe(guest => {
      console.log(guest);
    });

    this.router.navigate(['/current-guests']);
  }

}
