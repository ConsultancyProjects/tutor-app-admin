import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GENERIC_CONSTANTS } from 'src/app/core';

@Component({
  selector: 'app-lms-nav',
  templateUrl: './lms-nav.component.html',
  styleUrls: ['./lms-nav.component.scss']
})
export class LmsNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    let userDetails = JSON.parse(localStorage.getItem(GENERIC_CONSTANTS.LOGGEDIN_USER));
    if(userDetails.role && userDetails.role.length> 0) {
      userDetails.role.forEach((item) => {
        if( item.authority == 'ADMIN' ) {
          this.router.navigate(['admin']); 
        }
        if( item.authority == 'TUTOR' ) {
          this.router.navigate(['tutor']); 
        }
        if( item.authority == 'STUDENT' ) {
          this.router.navigate(['student']); 
        }
      });
    }
  }

}
