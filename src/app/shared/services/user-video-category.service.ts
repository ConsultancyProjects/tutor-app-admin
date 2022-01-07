
import { Injectable } from '@angular/core';
import { HttpService } from '../../core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserVideoCategory } from '../models';
import jwtDecode from 'jwt-decode';
import { GENERIC_CONSTANTS, ROUTES,API_ENDPOINTS } from '../../core';

@Injectable({ providedIn: 'root' })
export class UserVideoCategoryService {
    constructor(private http: HttpService) {
        
    }

    getAllCategoriesByUserId(userId: string) {
        return this.http.getRequest<any>(API_ENDPOINTS.USER_VIDEO_CATEGORY.API + API_ENDPOINTS.USER_VIDEO_CATEGORY.GET_ALL_CATEGORIES_BY_USER_ID(userId))
            .pipe(map(data => {
                     return data;
            }));
    }

    getAllCategoriesByCategoryId(categoryId: string) {
        return this.http.getRequest<any>(API_ENDPOINTS.USER_VIDEO_CATEGORY.API + API_ENDPOINTS.USER_VIDEO_CATEGORY.GET_ALL_CATEGORIES_BY_CATEGORY_ID(categoryId))
            .pipe(map(data => {
                     return data;
            }));
    }

    addUserVideoCategory(userVideoCategory: UserVideoCategory) {
        return this.http.postRequest<any>(API_ENDPOINTS.USER_VIDEO_CATEGORY.API + API_ENDPOINTS.USER_VIDEO_CATEGORY.ADD_USER_VIDEO_CATEGORY_ID, userVideoCategory)
            .pipe(map(data => {
                     return data;
            }));
    }

    updateUserVideoCategory(userVideoCategory: UserVideoCategory ) {
        return this.http.putRequest<any>(API_ENDPOINTS.USER_VIDEO_CATEGORY.API + API_ENDPOINTS.USER_VIDEO_CATEGORY.UPDATE_USER_VIDEO_CATEGORY_ID, userVideoCategory)
            .pipe(map(data => {
                return data;
            }));
    }
    deleteUserCategoryMapping(userVideoCategoryId: number) {
        return this.http.deleteRequest<any>(API_ENDPOINTS.USER_VIDEO_CATEGORY.API + API_ENDPOINTS.USER_VIDEO_CATEGORY.DELETE_USER_CATEGORY(userVideoCategoryId))
        .pipe(map(data => {
                 return data;
        }));
    }
}

