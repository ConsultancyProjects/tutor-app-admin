import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StringTextModule } from '@carbon/icons-angular';
import { CategoryService, ChildVideoCategory, ChildVideoCategoryService, VideoCategory, VideoCategoryService } from 'src/app/shared';
import { BatchService } from 'src/app/shared/services/batch.service';

@Component({
  selector: 'app-manage-batch',
  templateUrl: './manage-batch.component.html',
  styleUrls: ['./manage-batch.component.scss']
})
export class ManageBatchComponent  implements OnInit {
  breadCrumbItems: Array<{}>;

  form: FormGroup;
  categories: VideoCategory[];
  subcategories: ChildVideoCategory[];
  selectedCategoryName: string;
  selectedCategoryId: number;
  selectedSubCategoryName: string;
  selectedSubCategoryId: number;
  parentCategoryError: string;
  formSubmitted: boolean;
  constructor(private fb: FormBuilder, 
    private categoryService: CategoryService,
    private videoCategoryService: VideoCategoryService,
    private childCategoryService: ChildVideoCategoryService,
    private batchService: BatchService) {
    
  }

  ngOnInit(): void {
    this.initCategories();
    this.breadCrumbItems = [{ label: 'Batches' }, { label: 'Manage Batch', active: true }];
    this.loadCategories();
    this.formSubmitted = false;
  }
  initCategories(): any {
    this.form = this.fb.group({
      categoryId:0,
      categoryName: ['', Validators.required],
      formlist: this.fb.array([])
    });
  }
  validateForm(): any {
    let subCForm = this.form.get('formlist').value;
    if(!this.selectedCategoryId)
    return false;
    if(this.selectedCategoryId == 0) {
      //this.parentCategoryError = true;
      return false;
    }
    return true;
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
    this.childCategoryService.getAllChildVideoCategoriesByParentCategoryId(this.selectedCategoryId+'').subscribe({
      next: data => {
        this.subcategories = data;
        this.formData().controls=[];
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
    let inputData = [];
    someData.forEach((item: any) => {
      inputData.push({ 
        childCategoryId: item.subCategoryId,
        name: item.subCategoryName,
        parentCategory: {
          categoryId: this.selectedCategoryId,
          categoryName: this.selectedCategoryName
        }
      });
    });
    
    if(this.validateForm()) {
      this.childCategoryService.addAllChildVideoCategory(inputData).subscribe({
        next: data => {
          //this.initCategories();
          this.loadSubCategories();
        },
        error: error => {

        }
      });
      this.formSubmitted = false;
    } else {

      return false;
    }
    return true;
  }
  field(): FormGroup {
    return this.fb.group({
      subCategoryName: ['', Validators.required],
      subCategoryId: '0'
    });
  }

  removeField(i: number) {
    if (confirm('Are you sure you want to delete this element?')) {
      this.formData().removeAt(i);
    }
  }
  removeCategory(categoryId: string) {
    this.videoCategoryService.deleteChildVideoCategory(categoryId).subscribe({
      next: data => {
        console.log(data);
        this.loadCategories();
        this.loadSubCategories();
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
