import { Injectable } from '@angular/core';

@Injectable()
export class ValidateGuestService {

  constructor() { }

  validateRegister(guest) {
    if (guest.firstName === undefined || guest.lastName === undefined || guest.ID === undefined ) {
      return false;
    } else {
      return true;
    }
  }
}
