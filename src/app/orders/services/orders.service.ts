import { Injectable } from '@angular/core';
import { HttpService } from '../../common/http/services/http.service';
import { PlaceOrderResponseDto } from '../dtos/responses/place-order-response.dto';
import { PlaceOrderRequestDto } from '../dtos/requests/place-order-request.dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class OrdersService {
  constructor(private readonly httpService: HttpService) {}

  async placeOrder(body: PlaceOrderRequestDto): Promise<PlaceOrderResponseDto> {
    const obs = this.httpService.post<PlaceOrderRequestDto, PlaceOrderResponseDto>('url', body)

    return firstValueFrom(obs)
  }
}
