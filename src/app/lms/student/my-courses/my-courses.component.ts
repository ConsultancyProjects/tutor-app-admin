
import { Component, OnInit } from '@angular/core';
import { TimeTable, TimeTableService } from 'src/app/shared';
import { APIAuthenticationService, GENERIC_CONSTANTS } from 'src/app/core';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;
  timeTableData: TimeTable[];

  constructor(private timeTableService: TimeTableService, private apiAuthenticationService: APIAuthenticationService) {
    
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'My Courses' }, { label: 'Courses Grid', active: true }];
    let user: string = this.apiAuthenticationService.currentUserValue.sub;
    this.timeTableData = this.timeTableService.getTimeTableByStudent(user).subscribe({
      next: (data) => {
        console.log(data);
      }, 
      error: (error) => {
        console.log(error);
      }
    })
  }

}
