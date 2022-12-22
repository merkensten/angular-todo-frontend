import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // Get the JWT from local storage
    const jwt = this.authService.getToken();

    // If there is a JWT, add it to the headers of the request
    if (jwt) {
      const authReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${jwt}`),
      });
      return next.handle(authReq);
    }

    // If there is no JWT, just pass the original request through
    return next.handle(request);
  }
}
