import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutAddressStepComponent } from './checkout-address-step.component';

describe('CheckoutAddressStepComponent', () => {
  let component: CheckoutAddressStepComponent;
  let fixture: ComponentFixture<CheckoutAddressStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutAddressStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckoutAddressStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
