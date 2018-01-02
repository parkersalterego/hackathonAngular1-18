import { Injectable } from '@angular/core';
import { Guest } from '../models/guest';

@Injectable()
export class GuestsService {
  currentGuests: [Guest] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      ID: true,
      Stays: [
        {
          startDate: '2017-12-07',
          endDate: '2017-12-09',
          location: 'havenOne'
        }
      ]
    }
  ];

  constructor() { }

}
