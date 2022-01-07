import { Injectable } from '@angular/core';
import { HttpService } from '../../core';
import { map } from 'rxjs/operators';
import { Category } from '../models';
import { GENERIC_CONSTANTS, ROUTES,API_ENDPOINTS } from '../../core';

@Injectable({ providedIn: 'root' })
export class CategoryService {

    constructor(private http: HttpService) {
        
    }

    getAll() {
        return this.http.getAll<any>({ url: API_ENDPOINTS.CATEGORY.API+ API_ENDPOINTS.CATEGORY.GET_ALL, payload: null})
            .pipe(map(data => {
                     return data;
                
            }));
    }

    addCategory(category: Category ) {
        return this.http.postRequest<any>( API_ENDPOINTS.CATEGORY.API+ API_ENDPOINTS.CATEGORY.ADD, category)
            .pipe(map(data => {
                
                
                    return data;
                
            }));
    }
}
