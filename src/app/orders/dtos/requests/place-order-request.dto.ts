import { ShippingDetailsDto } from '../../../common/dtos/shipping-details.dto';

export interface PlaceOrderRequestDto {
  shippingDetails: ShippingDetailsDto;
}
