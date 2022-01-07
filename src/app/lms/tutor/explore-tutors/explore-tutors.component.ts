import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';

import { projectData } from '../projectdata';
@Component({
  selector: 'app-explore-tutors',
  templateUrl: './explore-tutors.component.html',
  styleUrls: ['./explore-tutors.component.scss']
})
export class ExploreTutorsComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  projectData: Project[];
 
  constructor() { }
 
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Projects' }, { label: 'Projects List', active: true }];
 
    this.projectData = projectData;
  }
}
