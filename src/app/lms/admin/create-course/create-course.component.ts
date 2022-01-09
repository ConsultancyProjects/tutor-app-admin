import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CategoryService } from 'src/app/shared';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit, OnChanges {

  breadCrumbItems: Array<{}>;
  categories: Array<{}>;
  constructor(private categoryService: CategoryService) { 

  }
  loadCategories(): void {
    this.categoryService.getAll().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (error) => {

      }
    });
  }
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Create Courses' }, { label: 'Courses', active: true }];
    this.loadCategories();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.loadCategories();
  }
}

