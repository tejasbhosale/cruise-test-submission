import { TestBed, inject } from '@angular/core/testing';

import { CruisesService } from './cruises.service';

describe('CruisesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CruisesService]
    });
  });

  it('should be created', inject([CruisesService], (service: CruisesService) => {
    expect(service).toBeTruthy();
  }));
});
