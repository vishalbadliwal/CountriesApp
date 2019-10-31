import { TestBed } from '@angular/core/testing';

import { HttpCountriesService } from './http-countries.service';

describe('HttpCountriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpCountriesService = TestBed.get(HttpCountriesService);
    expect(service).toBeTruthy();
  });
});
