import { Component, OnInit } from '@angular/core';
import { GuestsService } from '../../services/guests.service';
import { Guest } from '../../models/guest';

@Component({
  selector: 'app-current-guests',
  templateUrl: './current-guests.component.html',
  styleUrls: ['./current-guests.component.css']
})


export class CurrentGuestsComponent implements OnInit {
  currentGuests: [Guest];

  constructor(public guestsService: GuestsService) { }

  ngOnInit() {

    this.currentGuests = this.guestsService.currentGuests;
    console.log(this.currentGuests);

  }

}
