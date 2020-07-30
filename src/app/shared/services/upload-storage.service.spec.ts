import { TestBed } from '@angular/core/testing';

import { UploadStorageService } from './upload-storage.service';

describe('UploadStorageService', () => {
  let service: UploadStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
