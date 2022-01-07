
import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';

import { projectData } from '../myprojectdata';
@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;
  projectData: Project[];

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Projects' }, { label: 'Projects Grid', active: true }];

    this.projectData = projectData;
  }

}
