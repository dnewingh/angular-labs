import { TestBed } from '@angular/core/testing';

import { RemoteActorsService } from './remote-actors.service';

describe('RemoteActorsService', () => {
  let service: RemoteActorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoteActorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
