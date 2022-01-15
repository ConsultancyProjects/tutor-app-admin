import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as categoryActions from './category.actions';
import {GetAllCategoriesErrorAction, GetAllCategoriesSuccessAction} from './category.actions';
import { AddCategorySuccessAction, AddCategoryErrorAction } from './category.actions';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {CategoryService} from '../../services/category.service';
import {catchError, map, switchMap} from 'rxjs/operators';


@Injectable()
export class CategoryEffects {
  constructor(private actions$: Actions, private svc: CategoryService) {
  }

  

  addCategory$: Observable<Action> = createEffect(() => {
    return this
    .actions$.pipe(
      ofType(categoryActions.ADD_CATEGORY),
      map((action: categoryActions.AddCategoryAction) => action.payload),
      switchMap((category) => this.svc.addCategory(category)),
      map(result => new AddCategorySuccessAction(result)),
      catchError((err) => [new AddCategoryErrorAction(err)])
    );
  });
}
