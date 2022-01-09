import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/shared';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit, OnChanges {

  breadCrumbItems: Array<{}>;
  categories: Array<{}>;
  selectedCategory: any;
  videosForm: any;
  constructor(private categoryService: CategoryService,
    private fb: FormBuilder) { 

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
    this.initVideos();
    this.breadCrumbItems = [{ label: 'Create Courses' }, { label: 'Courses', active: true }];
    this.loadCategories();
  }

  initVideos(): any {
    this.videosForm = this.fb.group({
      videosList: this.fb.array([])
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.loadCategories();
    
  }
  selectCategory(categoryId: any): boolean {
    this.selectedCategory = categoryId;
    return true;
  }

  formData(): FormArray {
    return this.videosForm.get('videosList') as FormArray;
  }

  removeField(i: number) {
    if (confirm('Are you sure you want to delete this element?')) {
      this.formData().removeAt(i);
    }
  }
  addField() {
    this.formData().push(this.field());
  }
  field(): FormGroup {
    return this.fb.group({
      categoryName: '',
      categoryId: '0'
    });
  }
}

