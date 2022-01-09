import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User, UserService } from 'src/app/shared';
@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit, OnChanges {
  username: string = '';
  email: string = '';

  adminChkBox: boolean = false;
  studentChkBox: boolean = false;
  tutorChkBox: boolean = false;

  breadCrumbItems: Array<{}>;

  userData: User[];
  onLoadUserData: User[];

  constructor(private userService: UserService) { }
  

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Users' }, { label: 'Manage users', active: true }];

    this.makeAjaxToLoadUsers();
    
      
  }

  makeAjaxToLoadUsers() {
    let userData = this.userService.getAllUsers().subscribe({
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
    if (finalUserData.length != 0) {
      if (this.adminChkBox) {
        finalUserData = finalUserData.filter(i => i.role.id == 1);
      }
      if (this.tutorChkBox) {
        finalUserData = finalUserData.filter(i => i.role.id == 2);
      }
      if (this.studentChkBox) {
        finalUserData = finalUserData.filter(i => i.role.id == 3);
      }
    } else {
      if (this.adminChkBox) {
        finalUserData = this.onLoadUserData.filter(i => i.role.id == 1);
      }
      if (this.tutorChkBox) {
        finalUserData = this.onLoadUserData.filter(i => i.role.id == 2);
      }
      if (this.studentChkBox) {
        finalUserData = this.onLoadUserData.filter(i => i.role.id == 3);
      }
    }
    if (this.username.trim().length != 0 || this.email.trim().length != 0
    || this.adminChkBox || this.tutorChkBox || this.studentChkBox) {
      this.userData = finalUserData;
    }
    if (this.username.trim().length == 0 && this.email.trim().length == 0
    && !this.adminChkBox && !this.tutorChkBox && !this.studentChkBox) {
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
    this.adminChkBox = false;
    this.studentChkBox = false;
    this.tutorChkBox = false;
  }

}
