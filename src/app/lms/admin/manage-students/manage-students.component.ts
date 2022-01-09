import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User, UserService } from 'src/app/shared';
@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.scss']
})
export class ManageStudentsComponent implements OnInit {
  username: string = '';
  email: string = '';

 

  breadCrumbItems: Array<{}>;

  userData: User[];
  onLoadUserData: User[];

  constructor(private userService: UserService) { }
  

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Users' }, { label: 'Manage users', active: true }];

    this.makeAjaxToLoadUsers();
    
      
  }

  makeAjaxToLoadUsers() {
    let userData = this.userService.getAllUsersByRole('3').subscribe({
      next: userdata => {
          this.userData = userdata;
          this.onLoadUserData = userdata;
      },error: error => {
          return null;
      }
  });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.userData = this.userService.getAllUsersByRole('');
  }

  filterGrid(event: Event):boolean {
    
    let finalUserData = [];
    if (this.username.trim().length != 0) {
      finalUserData = this.onLoadUserData.filter(i => i.name.startsWith(this.username));
    } 
    if (this.email.trim().length != 0) {
      if (finalUserData.length != 0) {
        finalUserData = finalUserData.filter(i => i.email.startsWith(this.email));
      } else {
        finalUserData = this.onLoadUserData.filter(i => i.email.startsWith(this.email));
      }
    }
    
    if (this.username.trim().length != 0 || this.email.trim().length != 0) {
      this.userData = finalUserData;
    }
    if (this.username.trim().length == 0 && this.email.trim().length == 0) {
      this.userData = this.onLoadUserData;
    }
    
    return true;
  }

  deleteUser(userId):boolean {
    this.userService.deleteUser(userId).subscribe({
      next: status => {
        this.userData = this.userData.filter(i=>i.userId != userId);
        console.log(status);
      },error: error => {
          return null;
      }
  });
  return true;
  }

  updateRole(roleId, userId):any {
    this.userService.updateUserRole(roleId, userId).subscribe({
      next: data => {
          this.makeAjaxToLoadUsers();
          this.clearFilters();
      },error: error => {
          
      }
  });
    return null;
  }

  clearFilters() {
    this.username = '';
    this.email = '';
  }

}


