import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../services/auth.service';
import { APIAuthenticationService } from '../services/authapi.service';
import { GENERIC_CONSTANTS, ROUTES} from '../constants/global.constants';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private authFackservice: APIAuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        /*if (environment.defaultauth === 'firebase') {
            const currentUser = this.authenticationService.currentUser();
            if (currentUser) {
                // logged in so return true
                return true;
            }
        } else */{
            const currentUser = localStorage.getItem(GENERIC_CONSTANTS.LOGGEDIN_USER);
            if (currentUser) {
                // logged in so return true
                return true;
            }
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate([ROUTES.ACCOUNT_LOGIN], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
