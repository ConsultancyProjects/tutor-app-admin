
import { Injectable } from '@angular/core';
import { HttpService } from '../../core';

import { map } from 'rxjs/operators';
import { Batch } from '../models';

import { GENERIC_CONSTANTS, ROUTES,API_ENDPOINTS } from '../../core';

@Injectable({ providedIn: 'root' })
export class BatchService {
    constructor(private http: HttpService) {
        
    }

    getAllBatches() {
        return this.http.getRequest<any>(API_ENDPOINTS.BATCH.API + API_ENDPOINTS.BATCH.GET_ALL_BATCHES)
            .pipe(map(data => {
                     return data;
            }));
    }

    getAllBatchesForUser(userId: string ) {
        return this.http.getRequest<any>(API_ENDPOINTS.BATCH.API + API_ENDPOINTS.BATCH.GET_ALL_BATCHES_BY_USER(userId))
            .pipe(map(data => {
                return data;
            }));
    }

    getAllBatchesForChildCatgeory(childVidCatId: string) {
        return this.http.postRequest<any>(API_ENDPOINTS.BATCH.API + API_ENDPOINTS.BATCH.ALL_BATCHES_BY_CHILD_CATEGORY_ID, childVidCatId)
        .pipe(map(data => {
                 return data;
        }));
    }
    addBatch(batch: any) {
        return this.http.postRequest<any>(API_ENDPOINTS.BATCH.API + API_ENDPOINTS.BATCH.ADD_BATCH, batch)
        .pipe(map(data => {
                 return data;
        }));
    }
    deleteBatch(batchId: number) {
        return this.http.deleteRequest<any>(API_ENDPOINTS.BATCH.API + API_ENDPOINTS.BATCH.DELETE_BATCH(batchId))
        .pipe(map(data => {
                 return data;
        }));
    }
    updateBatch(batch: any) {
        return this.http.putRequest<any>(API_ENDPOINTS.BATCH.API + API_ENDPOINTS.BATCH.UPDATE_BATCH, batch)
        .pipe(map(data => {
                 return data;
        }));
    }
}

