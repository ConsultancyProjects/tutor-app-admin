
import { Injectable } from '@angular/core';
import { HttpService } from '../../core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models';
import jwtDecode from 'jwt-decode';
import { GENERIC_CONSTANTS, ROUTES,API_ENDPOINTS } from '../../core';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpService) {
        
    }

    getAllUsersByRole(roleId: string): any {
        const url:string = API_ENDPOINTS.USER.API + API_ENDPOINTS.USER.GET_ALL_USERS_BY_ROLE(roleId);
        return this.http.getRequest<any>(url);
    }
    getUserProfile(userId: string) {
        return this.http.getRequest<any>(API_ENDPOINTS.USER.API + API_ENDPOINTS.USER.GET_USER_PROFILE(userId))
        .pipe(map(data => {
                 return data;
        }));
    }

    updateUserRole(roleId, userId) {
        return this.http.putRequest<any>(API_ENDPOINTS.ROLE.API + API_ENDPOINTS.ROLE.UPDATEUSERROLE(roleId, userId),{});
    }
}

