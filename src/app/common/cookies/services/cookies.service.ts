import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CookiesEnum } from '../../enums/cookies.enum';

@Injectable()
export class CookiesService {

  constructor(private readonly cookieService: CookieService) { }

  setClientIdCookie(value: string) {
    this.cookieService.set(CookiesEnum.clientID, value)
  }
}
