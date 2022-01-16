import { Injectable } from '@angular/core';
import { HttpService } from '../../core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VideoCategory } from '../models';
import jwtDecode from 'jwt-decode';
import { GENERIC_CONSTANTS, ROUTES,API_ENDPOINTS } from '../../core';

@Injectable({ providedIn: 'root' })
export class VideoCategoryService {
    constructor(private http: HttpService) {
        
    }

    getAllVideoCategories() {
        return this.http.getRequest<any>(API_ENDPOINTS.VIDEO_CATEGORY.API + API_ENDPOINTS.VIDEO_CATEGORY.GET_ALL_VIDEO_CATEGORIES)
            .pipe(map(data => {
                     return data;
            }));
    }

    addParentVideoCategory(videoCategory: VideoCategory ) {
        return this.http.postRequest<any>(API_ENDPOINTS.VIDEO_CATEGORY.API + API_ENDPOINTS.VIDEO_CATEGORY.ADD_PARENT_VIDEO_CATEGORY, videoCategory)
            .pipe(map(data => {
                return data;
            }));
    }
    updateParentVideoCategory(videoCategory: VideoCategory) {
        return this.http.putRequest<any>(API_ENDPOINTS.VIDEO_CATEGORY.API + API_ENDPOINTS.VIDEO_CATEGORY.UPDATE_PARENT_VIDEO_CATEGORY, videoCategory)
        .pipe(map(data => {
                 return data;
        }));
    }
    deleteChildVideoCategory(categoryId: string) {
        return this.http.deleteRequest<any>(API_ENDPOINTS.VIDEO_CATEGORY.API + API_ENDPOINTS.VIDEO_CATEGORY.DELETE_CHILD_VIDEO_CATEGORY(categoryId))
        .pipe(map(data => {
                 return data;
        }));
    }
}
