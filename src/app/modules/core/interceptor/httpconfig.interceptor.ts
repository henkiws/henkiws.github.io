import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { ErrorDialogService } from '../services/error-dialog.service';
import { CryptoJsService } from '../services/crypto-js.service';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(
        public errorDialogService: ErrorDialogService,
        private router: Router,
        private authService: AuthService,
        private crypto: CryptoJsService
    ) 
    { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = localStorage.getItem(this.authService.Token);

        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }

        // if (!request.headers.has('Content-Type')) {
        //     request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        // }

        // request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    // console.log('event--->>>', event);
                    // this.errorDialogService.openDialog(event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                let data = {};
                if (error.status === 422) {
                    data = {
                        reason: error.error.error.message ? error.error.error.message : 'Please check your entity',
                        status: '422 Unprocessable Entity'
                    };
                }else if(error.status === 404){
                    data = {
                        reason: 'Not Found Route',
                        status: '404 Not Found'
                    };
                }else if(error.status === 500){
                    data = {
                        reason: 'Please Contact Your Administrator',
                        status: '500 Internal Server Error'
                    };
                }else{
                    data = {
                        reason: error && error.error.message ? error.error.message : 'Internet not available, Check your internet connectivity and try again',
                        status: error.status !== 0 ? error.status : 'Not Connected'
                    };
                }
                if (error.status === 401) {
                    // Invalidate user session and redirect to login/home
                    this.authService.deleteToken();
                    this.router.navigate(['/']);
                }
                this.errorDialogService.openDialog(data);
                // this.router.navigate(['/']);
                return throwError(error);
            }));
    }
}