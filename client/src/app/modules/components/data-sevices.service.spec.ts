import { TestBed } from '@angular/core/testing';

import { DataSevicesService } from './data-sevices.service';

describe('DataSevicesService', () => {
  let service: DataSevicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSevicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
