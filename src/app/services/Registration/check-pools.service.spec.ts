import { TestBed } from '@angular/core/testing';

import { CheckPoolsService } from './check-pools.service';

describe('CheckPoolsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckPoolsService = TestBed.get(CheckPoolsService);
    expect(service).toBeTruthy();
  });
});
