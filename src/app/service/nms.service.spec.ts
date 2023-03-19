import { TestBed } from '@angular/core/testing';

import { NmsService } from './nms.service';

describe('NmsService', () => {
  let service: NmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
