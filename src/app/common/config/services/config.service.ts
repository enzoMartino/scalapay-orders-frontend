import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ConfigService {

  constructor() { }

  getApiHostname(): string {
    return environment.APIS_HOSTNAME
  }

  getApiPort(): number {
    return environment.APIS_PORT
  }

  getOrdersApiEndpoint(): string {
    return environment.ORDERS_APIS_ENDPOINT
  }

  getOrdersApiVersion(): string {
    return environment.ORDERS_APIS_VERSION
  }
}
