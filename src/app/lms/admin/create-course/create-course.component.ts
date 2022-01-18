import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService, ChildVideoCategoryService, VideoCategoryService } from 'src/app/shared';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit, OnChanges {

  breadCrumbItems: Array<{}>;
  categories: Array<{}>;
  subcategories: any;
  selectedCategory: any;
  videosForm: any;
  courseForm: FormGroup;
  constructor(
    private categoryService: CategoryService,
    private videoCategoryService: VideoCategoryService,
    private childVideoCategoryService: ChildVideoCategoryService,
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
  loadSubCategories(): void {
    this.childVideoCategoryService.getAllChildVideoCategoriesByParentCategoryId(this.selectedCategoryId+'').subscribe({
      next: (data) => {
        this.subcategories = data;
      },
      error: (error) => {

      }
    });
  }
  selectedCategoryId: number;
  selectedCategoryName: string;
  categoryDropdownHandler(event: any) {
    if(event) {
      this.selectedCategoryId = event.categoryId;
      this.selectedCategoryName = event.categoryName;
      this.loadSubCategories();
    } else {
      this.selectedCategoryId = -1;
      this.selectedCategoryName = '';
    }
  }

  ngOnInit() {
    this.initVideos();
    this.initCourseForm();
    this.breadCrumbItems = [{ label: 'Create Courses' }, { label: 'Courses', active: true }];
    this.loadCategories();
    this.loadSubCategories();
  }
  initCourseForm() {
    this.courseForm = new FormGroup({
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      overview: new FormControl('', Validators.required)
    });
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
  saveCourse(): any {
    return this.courseForm.value();
  }
}

