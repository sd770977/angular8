import { TestBed } from '@angular/core/testing';

import { EditservicesService } from './editservices.service';

describe('EditservicesService', () => {
  let service: EditservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
