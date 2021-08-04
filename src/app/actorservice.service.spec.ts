import { TestBed } from '@angular/core/testing';

import { ActorserviceService } from './actorservice.service';

describe('ActorserviceService', () => {
  let service: ActorserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActorserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
