import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

  constructor(private readonly httpClient: HttpClient) {}

  post<R, T>(url: string, body: R): Observable<T> {
    return this.httpClient.post<T>(url, body, { withCredentials: true })
  }
}
