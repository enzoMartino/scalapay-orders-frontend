import { TestBed } from '@angular/core/testing';

import { PlaceOrderSuccessHandlerService } from './place-order-success-handler.service';

describe('PlaceOrderSuccessHandlerService', () => {
  let service: PlaceOrderSuccessHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceOrderSuccessHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
