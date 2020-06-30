import { TestBed } from '@angular/core/testing';

import { TunerAudioService } from './tuner-audio.service';

describe('TunerAudioService', () => {
  let service: TunerAudioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TunerAudioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
