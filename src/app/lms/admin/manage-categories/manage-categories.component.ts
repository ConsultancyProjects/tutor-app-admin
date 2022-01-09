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
  phoneData: FormGroup;
  categories: VideoCategory[];
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      formlist: this.fb.array([]),
    }),

    this.phoneData = this.fb.group({
      phoneValue: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Categories' }, { label: 'Manage Category', active: true }];
  }

  formData(): FormArray {
    return this.form.get('formlist') as FormArray;
  }

  field(): FormGroup {
    return this.fb.group({
      name: '',
      email: '',
      subject: '',
      file: '',
      msg: '',
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
