import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
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
    this.form = this.fb.group({
      formlist: this.fb.array([])
    });

  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Categories' }, { label: 'Manage Category', active: true }];
  }

  formData(): FormArray {
    return this.form.get('formlist') as FormArray;
  }
  saveCategories(): boolean {
    let someData = this.form.get('formlist').value;
    this.categoryService.addAllCategory(someData).subscribe({
      next: data => {
        console.log(data);
      },
      error: error => {

      }
    })
    return true;
  }
  field(): FormGroup {
    return this.fb.group({
      categoryName: '',
      categoryId: '0'
    });
  }

  removeField(i: number) {
    if (confirm('Are you sure you want to delete this element?')) {
      this.formData().removeAt(i);
    }
  }

  addField() {
    this.formData().push(this.field());
  }
};
