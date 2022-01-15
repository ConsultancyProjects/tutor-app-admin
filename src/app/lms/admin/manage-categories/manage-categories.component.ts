import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService, VideoCategory } from 'src/app/shared';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.scss']
})
export class ManageCategoriesComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  form: FormGroup;
  categories: VideoCategory[];
  constructor(private fb: FormBuilder, private categoryService: CategoryService) {
    

  }

  ngOnInit(): void {
    this.initCategories();
    this.breadCrumbItems = [{ label: 'Categories' }, { label: 'Manage Category', active: true }];
    this.loadCategories();
  }
  initCategories(): any {
    this.form = this.fb.group({
      formlist: this.fb.array([])
    });
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
  formData(): FormArray {
    return this.form.get('formlist') as FormArray;
  }
  saveCategories(): boolean {
    if(this.form.get('formlist').status == 'INVALID') {
      return false;
    }
    let someData = this.form.get('formlist').value;
    this.categoryService.addAllCategory(someData).subscribe({
      next: data => {
        this.initCategories();
        this.loadCategories();
      },
      error: error => {

      }
    });
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
};
