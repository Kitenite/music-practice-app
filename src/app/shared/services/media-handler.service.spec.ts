import { TestBed } from '@angular/core/testing';

import { MediaHandlerService } from './media-handler.service';

describe('MediaHandlerService', () => {
  let service: MediaHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
