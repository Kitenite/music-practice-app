import { TestBed } from '@angular/core/testing';

import { MetronomeAudioService } from './metronome-audio.service';

describe('MetronomeAudioService', () => {
  let service: MetronomeAudioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetronomeAudioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
