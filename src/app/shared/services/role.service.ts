import { Injectable } from '@angular/core';
import { HttpService } from '../../core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Category } from '../models';
import jwtDecode from 'jwt-decode';
import { GENERIC_CONSTANTS, ROUTES,API_ENDPOINTS } from '../../core';

@Injectable({ providedIn: 'root' })
export class RoleService {

    constructor(private http: HttpService) {
        
    }

    getAll() {
        return this.http.getAll<any>({ url: API_ENDPOINTS.ROLE.API + API_ENDPOINTS.ROLE.GET_ALL, payload: null})
            .pipe(map(data => {
                  return data;
            }));
    }

    updateRole(id: any, data: any) {
        return this.http.update<any>({ url: API_ENDPOINTS.ROLE.API + API_ENDPOINTS.ROLE.UPDATE, id: id, itemToUpdate: data})
            .pipe(map(data => {
                   return data;
            }));
    }
    
}
