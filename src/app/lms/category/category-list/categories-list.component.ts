import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, getAllCategories, GetAllCategoriesAction, GetAllCategoriesSuccessAction } from 'src/app/shared';
import { Category } from 'src/app/shared/models';


@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  tutorials: any;
  currentTutorial = null;
  currentIndex = -1;
  title = '';
  categories : Observable<Category[]>;
  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    
    
    this.categories = this.store.select(getAllCategories);
    
    this.retrieveCategories();
  }

  retrieveCategories(): void {
    this.store.dispatch(new GetAllCategoriesAction());
  }

  refreshList(): void {
    this.retrieveCategories();
    this.currentTutorial = null;
    this.currentIndex = -1;
  }
/*
  setActiveTutorial(tutorial, index): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.tutorialService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.tutorialService.findByTitle(this.title)
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }*/
}
