import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutPlaceOrderStepComponent } from './checkout-place-order-step.component';

describe('CheckoutPlaceOrderStepComponent', () => {
  let component: CheckoutPlaceOrderStepComponent;
  let fixture: ComponentFixture<CheckoutPlaceOrderStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutPlaceOrderStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckoutPlaceOrderStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
