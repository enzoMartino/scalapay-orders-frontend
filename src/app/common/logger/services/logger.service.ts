import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  error(message: any): void {
    console.error(JSON.stringify(message))
  }

  log(message: any): void {
    console.log(JSON.stringify(message))
  }
}
