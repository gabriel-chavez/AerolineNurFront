import { TestBed } from '@angular/core/testing';

import { CheckInService } from './checkin.service';

describe('CheckInService', () => {
  let service: CheckInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
