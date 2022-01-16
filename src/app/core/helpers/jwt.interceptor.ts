import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { AuthenticationService } from '../services/auth.service';
import { APIAuthenticationService } from '../services/authapi.service';

import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService, 
        private authservice: APIAuthenticationService,
        private toasterService: ToastrService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        {
            // add authorization header with jwt token if available
            const currentUser = this.authservice.currentUserValue;
            if (currentUser && currentUser.token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${currentUser.token}`
                    }
                });
            }
        }
        return next.handle(request).pipe(
            tap(evt => {
                if (request.method != 'GET' && request.url.indexOf('login') == -1
                && request.url.indexOf('register') == -1 )
                if (evt instanceof HttpResponse) {
                    if(evt.status == 200) {
                        this.toasterService.success(
                            'SuccessFully Performed Operation', 'Success',
                             { positionClass: 'toast-top-right' });
                    } else if (evt.status == 403){
                        this.toasterService.error(
                            'Session has expired please login.', 'Success',
                             { positionClass: 'toast-top-right' });
                    } else {
                        this.toasterService.error(evt.body, 'Error',
                            { positionClass: 'toast-top-right' });
                    }
                        
                }
            }),
            catchError((err: any) => {
                try {
                    this.toasterService.error(err, 'Error',
                            { positionClass: 'toast-top-right' });
                } catch(e) {
                    this.toasterService.error('An error occurred', '', 
                    { positionClass: 'toast-top-right' });
                }
                return of(err);
            }));
    }
}
