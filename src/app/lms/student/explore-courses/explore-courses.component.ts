import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';

import { projectData } from '../projectdata';
@Component({
  selector: 'app-explore-courses',
  templateUrl: './explore-courses.component.html',
  styleUrls: ['./explore-courses.component.scss']
})
export class ExploreCoursesComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;
  projectData: Project[];

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Projects' }, { label: 'Projects Grid', active: true }];

    this.projectData = projectData;
  }

}
