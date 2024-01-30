import { Injectable } from '@angular/core';
import { HttpService } from '../../common/http/services/http.service';
import { PlaceOrderResponseDto } from '../dtos/responses/place-order-response.dto';
import { PlaceOrderRequestDto } from '../dtos/requests/place-order-request.dto';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '../../common/config/services/config.service';

@Injectable()
export class OrdersService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {}

  async placeOrder(body: PlaceOrderRequestDto): Promise<PlaceOrderResponseDto> {
    const url = `${this.configService.getApiHostname()}:${this.configService.getApiPort()}/${this.configService.getOrdersApiVersion()}/${this.configService.getOrdersApiEndpoint()}`;

    const obs = this.httpService.post<
      PlaceOrderRequestDto,
      PlaceOrderResponseDto
    >(url, body);

    return firstValueFrom(obs);
  }
}
