import { TestBed } from '@angular/core/testing';

import { LocalActorsService } from './local-actors.service';

describe('LocalActorsService', () => {
  let service: LocalActorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalActorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
