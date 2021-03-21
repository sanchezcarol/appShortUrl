import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const TOKEN = "48bc8d29b66a52f725e8ce711973455b16bcb86f"

    request = request.clone({ setHeaders: {Authorization: 'Bearer '+ TOKEN } })

    return next.handle(request);
  }
}
