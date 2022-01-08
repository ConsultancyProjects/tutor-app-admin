import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { map } from 'rxjs/operators';
import { User, UserService } from 'src/app/shared';

@Component({
  selector: 'app-assign-role',
  templateUrl: './assign-role.component.html',
  styleUrls: ['./assign-role.component.scss']
})
export class AssignRoleComponent implements OnInit {


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

  assignRole(roleId, userId):any {
    this.userService.updateUserRole(roleId, userId).subscribe({
      next: data => {
          console.log(data.response);
         this.userData =  this.userData.filter(i => i.userId !== userId);
      },error: error => {
          
      }
  });
    return null;
  }

}
