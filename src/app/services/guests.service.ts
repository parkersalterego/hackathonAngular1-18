import { Injectable } from '@angular/core';
import { Guest } from '../models/guest';

@Injectable()
export class GuestsService {
  guests: [Guest];

  constructor() { }

}
