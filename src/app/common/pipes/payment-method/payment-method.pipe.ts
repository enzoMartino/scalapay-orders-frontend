import { Pipe, PipeTransform } from '@angular/core';
import { PAYMENT_METHODS_MAP, PaymentMethodsEnum } from '../../enums/payment-methods.enum';

@Pipe({
  name: 'paymentMethod',
  standalone: true
})

export class PaymentMethodPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case PaymentMethodsEnum.scalapay:
        return PAYMENT_METHODS_MAP.get(value)
      default:
        return ''
    } 
  }
}
