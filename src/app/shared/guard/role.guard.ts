import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { GENERIC_CONSTANTS, ROUTES } from 'src/app/core';


import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
    constructor(
        private router: Router
    ) { 
        
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
            const currentUser = JSON.parse(localStorage.getItem(GENERIC_CONSTANTS.LOGGEDIN_USER));
            if(currentUser == null) {
                this.router.navigate([ROUTES.ACCOUNT_LOGIN], { queryParams: { returnUrl: state.url } });
                return false;
            }
            if (currentUser && route.data.roles && route.data.roles.indexOf(currentUser.role[0].authority) === -1) {
                // role not authorised so redirect to home page
                this.router.navigate([ROUTES.ACCOUNT_LOGIN], { queryParams: { returnUrl: state.url } });
                return false;
            }

            return true;
        
        // not logged in so redirect to login page with the return url
        
    }
}
