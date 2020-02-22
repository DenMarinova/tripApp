import {
  HttpHandler,
  HttpEvent,
  HttpRequest,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { AuthService } from '../auth/auth.service';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,

  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler)
    : Observable<HttpEvent<any>> {
    const token = localStorage.getItem('tripToken');
    if (token) {
      req = req.clone({ url: `${req.url}?auth=${token}` })
    }
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      }),
      catchError((err: HttpErrorResponse) => {
        this.toastr.error(`${err.statusText}`, 'Error');
        if (err.status == 401) {
          this.router.navigate(['auth/signin']);
        }
          return throwError(err);
        }));
  }
}
