import { TestBed } from '@angular/core/testing';

import { TimeSyncService } from './time-sync.service';

describe('TimeSyncService', () => {
  let service: TimeSyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeSyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
