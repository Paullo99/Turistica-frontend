import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (sessionStorage.getItem('token') != '') {
      const xhr = req.clone({
        setHeaders: {
          Authorization: 'Basic ' + sessionStorage.getItem('token'),
        },
      });

      return next.handle(xhr);
    } else {
      const xhr = req.clone({
        headers: req.headers.delete('Authorization'),
      });
      return next.handle(xhr);
    }
  }
}
