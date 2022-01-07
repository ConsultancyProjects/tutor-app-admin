
import { Injectable } from '@angular/core';
import { HttpService } from '../../core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TimeTable } from '../models';
import jwtDecode from 'jwt-decode';
import { GENERIC_CONSTANTS, ROUTES,API_ENDPOINTS } from '../../core';

@Injectable({ providedIn: 'root' })
export class TimeTableService {
    constructor(private http: HttpService) {
        
    }

    getTimeTableByDate(fromDate: string) {
        return this.http.getRequest<any>(API_ENDPOINTS.TIMETABLE.API + API_ENDPOINTS.TIMETABLE.GET_TIMETABLE_BY_DATE(fromDate))
        .pipe(map(data => {
                 return data;
        }));
    }

    addTimeTable(timeTable: TimeTable) {
        return this.http.postRequest<any>(API_ENDPOINTS.TIMETABLE.API + API_ENDPOINTS.TIMETABLE.ADD_TIMETABLE, timeTable)
        .pipe(map(data => {
                 return data;
        }));
    }

    updateTimeTable(timeTable: TimeTable) {
        return this.http.putRequest<any>(API_ENDPOINTS.TIMETABLE.API + API_ENDPOINTS.TIMETABLE.UPDATE_TIMETABLE, timeTable)
        .pipe(map(data => {
                 return data;
        }));
    }
}

