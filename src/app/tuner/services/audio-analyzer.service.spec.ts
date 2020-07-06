import { TestBed } from '@angular/core/testing';

import { AudioAnalyzerService } from './audio-analyzer.service';

describe('AudioAnalyzerService', () => {
  let service: AudioAnalyzerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioAnalyzerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
