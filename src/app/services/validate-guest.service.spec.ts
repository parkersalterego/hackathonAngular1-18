import { TestBed, inject } from '@angular/core/testing';

import { ValidateGuestService } from './validate-guest.service';

describe('ValidateGuestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidateGuestService]
    });
  });

  it('should be created', inject([ValidateGuestService], (service: ValidateGuestService) => {
    expect(service).toBeTruthy();
  }));
});
