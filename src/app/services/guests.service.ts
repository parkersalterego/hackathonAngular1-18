import { Injectable } from '@angular/core';
import { Guest } from '../models/guest';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GuestsService {
  currentGuests: [Guest];

  constructor(private http: Http) { }

  addGuest(guest) {
    return this.http.post('http://localhost:3000/guests', guest)
      .map(res => res.json());
  }

  getGuests() {
    return this.http.get('http://localhost:3000/guests')
      .map(res => res.json());
  }

  deleteGuest(id) {
    return this.http.delete('http://localhost:3000/guests/' + id)
      .map(res => res.json());
  }

}
