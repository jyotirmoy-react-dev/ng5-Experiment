import { TestBed, inject } from '@angular/core/testing';

import { FetchdataserviceService } from './fetchdataservice.service';

describe('FetchdataserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchdataserviceService]
    });
  });

  it('should be created', inject([FetchdataserviceService], (service: FetchdataserviceService) => {
    expect(service).toBeTruthy();
  }));
});
