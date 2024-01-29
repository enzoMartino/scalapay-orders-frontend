import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutConfirmStepComponent } from './checkout-confirm-step.component';

describe('CheckoutConfirmStepComponent', () => {
  let component: CheckoutConfirmStepComponent;
  let fixture: ComponentFixture<CheckoutConfirmStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutConfirmStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckoutConfirmStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
