import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StringTextModule } from '@carbon/icons-angular';
import { CategoryService, ChildVideoCategory, ChildVideoCategoryService, VideoCategoryService } from 'src/app/shared';

@Component({
  selector: 'app-schedule-course',
  templateUrl: './schedule-course.component.html',
  styleUrls: ['./schedule-course.component.scss']
})
export class ScheduleCourseComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  form: FormGroup;
  categories: ChildVideoCategory[];
  subcategories: ChildVideoCategory[];
  selectedCategoryName: string;
  selectedCategoryId: number;
  parentCategoryError: string;
  formSubmitted: boolean;
  constructor(private fb: FormBuilder, 
    private categoryService: CategoryService,
    private childCategoryService: ChildVideoCategoryService) {
  }

  ngOnInit(): void {
    this.initCategories();
    this.breadCrumbItems = [{ label: 'Schedule Course' }, { label: 'Manage Schedule Course', active: true }];
    this.loadCategories();
    this.formSubmitted = false;
  }
  initCategories(): any {
    this.form = this.fb.group({
      categoryName: ['',Validators.required],
      categoryId: {},
      formlist: this.fb.array([])
    });
  }
  validateForm(): any {
    let subCForm = this.form.get('formlist').value;
    if(this.selectedCategoryId == 0) {
      
    }
  }
  loadCategories(): any {
    this.categoryService.getAll().subscribe({
      next: data => {
        this.categories = data;
      },
      error: error => {

      }
    });
  }
  loadSubCategories(): any {
    if(this.selectedCategoryId)
    this.childCategoryService.getAllChildVideoCategoriesByParentCategoryId(this.selectedCategoryId+"").subscribe({
      next: data => {
        this.subcategories = data;
      },
      error: error => {

      }
    });
  }
  formData(): FormArray {
    return this.form.get('formlist') as FormArray;
  }
  saveCategories(): boolean {
    this.formSubmitted = true;
    let someData = this.form.get('formlist').value;
    someData = {
      ...someData,
      childCategoryId: this.selectedCategoryId,
      name: this.selectedCategoryName
    }
    if(this.validateForm()) {
      this.childCategoryService.addChildVideoCategory(someData).subscribe({
        next: data => {
          this.initCategories();
          this.loadCategories();
        },
        error: error => {

        }
      });
    }
    return true;
  }
  field(): FormGroup {
    return this.fb.group({
      categoryName: ['', Validators.required],
      categoryId: '0'
    });
  }

  removeField(i: number) {
    if (confirm('Are you sure you want to delete this element?')) {
      this.formData().removeAt(i);
    }
  }
  removeCategory(categoryId: string) {
    this.categoryService.deleteCategory(categoryId).subscribe({
      next: data => {
        console.log(data);
        this.loadCategories();
      },
      error: error => {

      }
    })
  }
  addField() {
    this.formData().push(this.field());
  }
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
}
