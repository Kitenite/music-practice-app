import { TestBed } from '@angular/core/testing';

import { DroneAudioService } from './drone-audio.service';

describe('DroneAudioService', () => {
  let service: DroneAudioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DroneAudioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
