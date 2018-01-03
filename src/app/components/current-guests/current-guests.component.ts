import { Component, OnInit  } from '@angular/core';
import { GuestsService } from '../../services/guests.service';
import { Guest } from '../../models/guest';
import { Http } from '@angular/http';

@Component({
  selector: 'app-current-guests',
  templateUrl: './current-guests.component.html',
  styleUrls: ['./current-guests.component.css']
})


export class CurrentGuestsComponent implements OnInit {
  currentGuests: [Guest];

  constructor(private guestsService: GuestsService, private http: Http) {
    this.guestsService.getGuests().subscribe(guests => {
      this.currentGuests = guests;
    });
  }

  ngOnInit() {


  }

  checkoutGuest(id) {
    this.guestsService.deleteGuest(id).subscribe(res => {
      for (let i = 0; i < this.currentGuests.length; i++) {
        if (this.currentGuests[i]._id === id) {
          this.currentGuests.splice(i, 1);
        }
      }
    });
  }

}
