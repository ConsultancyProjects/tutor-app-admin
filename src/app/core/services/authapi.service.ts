import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { User } from '../models/auth.models';
import jwtDecode from 'jwt-decode';
import { API_ENDPOINTS, GENERIC_CONSTANTS, ROUTES } from '../constants';

@Injectable({ providedIn: 'root' })
export class APIAuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpService) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(GENERIC_CONSTANTS.LOGGEDIN_USER)));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.postRequestNoHeaders<any>(ROUTES.LOGIN, { username, password }, {})
            .pipe(map(data => {
                // login successful if there's a jwt token in the response
                if (data && data.jwt) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    const user:any = jwtDecode(data.jwt);
                    
                    const userSubject:User = {
                        id: user.sub,
                        username: user.sub
                    }
                    localStorage.setItem(GENERIC_CONSTANTS.LOGGEDIN_USER, JSON.stringify(user));
                    localStorage.setItem(GENERIC_CONSTANTS.LOGGEDIN_TOKEN, data.jwt);
                    this.currentUserSubject.next(userSubject);
                    return userSubject;
                }
                return data;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem(GENERIC_CONSTANTS.LOGGEDIN_USER);
        this.currentUserSubject.next(null);
    }

    register(data: any): Observable<any> {
        return this.http.postRequestNoHeaders<any>(API_ENDPOINTS.REGISTER, data, {});
    }
}
