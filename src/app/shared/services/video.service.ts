import { Injectable } from '@angular/core';
import { HttpService } from '../../core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Video } from '../models';
import jwtDecode from 'jwt-decode';
import { GENERIC_CONSTANTS, ROUTES,API_ENDPOINTS } from '../../core';

@Injectable({ providedIn: 'root' })
export class VideoService {
    constructor(private http: HttpService) {
        
    }

    getVideoMetaData(videoId: number) {
        return this.http.getRequest<any>(API_ENDPOINTS.VIDEO.API + API_ENDPOINTS.VIDEO.GET_VIDEO_METADATA(videoId))
            .pipe(map(data => {
                     return data;
            }));
    }

    getAllVideosMetaData(category: Video ) {
        return this.http.getRequest<any>(API_ENDPOINTS.VIDEO.API + API_ENDPOINTS.VIDEO.GET_ALL_VIDEOS_METADATA)
            .pipe(map(data => {
                return data;
            }));
    }
    findAllVideosThatBelongToParentCategoryId(categoryId: number) {
        return this.http.getRequest<any>(API_ENDPOINTS.VIDEO.API + API_ENDPOINTS.VIDEO.FIND_ALL_VIDEOS_BY_PARENT_CATEGORY(categoryId))
        .pipe(map(data => {
                 return data;
        }));
    }
    getVideosMetaThatBelongToChildCategoryId(categoryId: number) {
        return this.http.getRequest<any>(API_ENDPOINTS.VIDEO.API + API_ENDPOINTS.VIDEO.GET_VIDEOS_BY_CHILD_CATEGORY_ID(categoryId))
            .pipe(map(data => {
                     return data;
            }));
    }
    addVideoMetaData(payload: any) {
        return this.http.postRequest<any>(API_ENDPOINTS.VIDEO.API+ API_ENDPOINTS.VIDEO.ADD_VIDEO_METADATA, payload)
            .pipe(map(data => {
                     return data;
            }));
    }
}
