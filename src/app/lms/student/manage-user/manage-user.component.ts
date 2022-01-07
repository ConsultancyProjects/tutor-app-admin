import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { map } from 'rxjs/operators';
import { User, UserService } from 'src/app/shared';
@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit, OnChanges {

  breadCrumbItems: Array<{}>;

  userData: User[];

  constructor(private userService: UserService) { }
  

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Users' }, { label: 'Manage users', active: true }];

    this.userService.getAllUsersByRole('').subscribe({
      next: userdata => {
          this.userData = userdata;
      },error: error => {
          
      }
  });
    
      
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.userService.getAllUsersByRole('').subscribe({
      next: userdata => {
          this.userData = userdata;
      },error: error => {
          
      }
  });
  }

}
