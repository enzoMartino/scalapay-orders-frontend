import { Component } from '@angular/core';
import { CheckoutStepperComponent } from './components/checkout-stepper/checkout-stepper.component';
import { ShippingDetailsDto } from '../../common/dtos/shipping-details.dto';
import { OrdersService } from '../../orders/services/orders.service';
import { OrdersModule } from '../../orders/orders.module';
import { LoggerModule } from '../../common/logger/logger.module';
import { LoggerService } from '../../common/logger/services/logger.service';
import { PlaceOrderSuccessHandlerService } from '../../orders/services/place-order-success-handler.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CheckoutStepperComponent, OrdersModule, LoggerModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})

export class CheckoutComponent {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly loggerService: LoggerService,
    private readonly placeOrderSuccessHandlerService: PlaceOrderSuccessHandlerService
  ) {}

  async handlePlaceOrderClicked(
    shippingDetailsDto: ShippingDetailsDto
  ): Promise<void> {
    try {
      const response = await this.ordersService.placeOrder({
        shippingDetails: shippingDetailsDto,
      });

      this.loggerService.log(response.checkoutUrl)

      this.placeOrderSuccessHandlerService.handlePlaceOrderSuccess(response)
    } catch (error: any) {
      this.loggerService.error(error.message)
    }
  }
}
