import { Injectable } from '@angular/core';
import { PlaceOrderResponseDto } from '../dtos/responses/place-order-response.dto';

@Injectable()
export class PlaceOrderSuccessHandlerService {
  handlePlaceOrderSuccess(response: PlaceOrderResponseDto): void {
    if (response.checkoutUrl) {
      window.location.href = response.checkoutUrl;
    }
  }
}
