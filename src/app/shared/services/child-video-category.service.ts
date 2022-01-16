
import { Injectable } from '@angular/core';
import { HttpService } from '../../core';

import { map } from 'rxjs/operators';
import { ChildVideoCategory } from '../models';

import { GENERIC_CONSTANTS, ROUTES,API_ENDPOINTS } from '../../core';

@Injectable({ providedIn: 'root' })
export class ChildVideoCategoryService {
    constructor(private http: HttpService) {
        
    }

    getAllChildVideoCategories() {
        return this.http.getRequest<any>(API_ENDPOINTS.CHILD_VIDEO_CATEGORY.API + API_ENDPOINTS.CHILD_VIDEO_CATEGORY.GET_ALL_CHILD_VIDEO_CATEGORIES)
            .pipe(map(data => {
                     return data;
            }));
    }

    getAllChildVideoCategoriesByParentCategoryId(parentCategoryId: string ) {
        return this.http.getRequest<any>(API_ENDPOINTS.CHILD_VIDEO_CATEGORY.API + API_ENDPOINTS.CHILD_VIDEO_CATEGORY.GET_ALL_VIDEO_CATEGORIES_BY_PARENT_CATEGORY_ID(parentCategoryId))
            .pipe(map(data => {
                return data;
            }));
    }

    addChildVideoCategory(childVideoCategory: ChildVideoCategory) {
        return this.http.postRequest<any>(API_ENDPOINTS.CHILD_VIDEO_CATEGORY.API + API_ENDPOINTS.CHILD_VIDEO_CATEGORY.ADD_CHILD_VIDEO_CATEGORY, childVideoCategory)
        .pipe(map(data => {
                 return data;
        }));
    }
    addAllChildVideoCategory(childVideoCategories: any) {
        return this.http.postRequest<any>(API_ENDPOINTS.CHILD_VIDEO_CATEGORY.API + API_ENDPOINTS.CHILD_VIDEO_CATEGORY.ADD_ALL_CHILD_VIDEO_CATEGORY, childVideoCategories)
        .pipe(map(data => {
                 return data;
        }));
    }
    updateChildVideoCategory(childVideoCategory: ChildVideoCategory) {
        return this.http.putRequest<any>(API_ENDPOINTS.CHILD_VIDEO_CATEGORY.API + API_ENDPOINTS.CHILD_VIDEO_CATEGORY.UPDATE_CHILD_VIDEO_CATEGORY, childVideoCategory)
        .pipe(map(data => {
                 return data;
        }));
    }
}

