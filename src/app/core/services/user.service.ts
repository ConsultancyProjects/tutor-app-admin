import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/auth.models';
import { HttpService } from './http.service';

@Injectable({ providedIn: 'root' })
export class UserProfileService {
    constructor(private http: HttpService) { }

    getAll() {
        return this.http.getAll<User[]>( { url: `/users/`, payload: null});
    }

    
}
