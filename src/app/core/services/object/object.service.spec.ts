import { TestBed } from '@angular/core/testing';

import { ObjectService } from '../../services/object/object.service';

describe('ObjectService', () => {
  let service: ObjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
