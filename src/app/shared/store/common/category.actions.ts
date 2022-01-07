import {Action} from '@ngrx/store';

import {Category} from '../../models';

export const GET_CATEGORIES = '[ALL] Categories';
export const GET_CATEGORIES_SUCCESS = '[ALL] Categories Success';
export const GET_CATEGORIES_ERROR = '[ALL] Categories Error';

export const ADD_CATEGORY = 'Add Categories';
export const ADD_CATEGORY_SUCCESS = 'Add Categories Success';
export const ADD_CATEGORY_ERROR = 'Add Categories Error';



/****************************************
 * GET all the Category
 ****************************************/
export class GetAllCategoriesAction implements Action {
  readonly type = GET_CATEGORIES;
}

export class GetAllCategoriesSuccessAction implements Action {
  readonly type = GET_CATEGORIES_SUCCESS;

  constructor(public payload: Category[]) {
  }
}

export class GetAllCategoriesErrorAction implements Action {
  readonly type = GET_CATEGORIES_ERROR;

  constructor(public payload: Error) {
  }
}

export class AddCategoryAction implements Action {
  readonly type = ADD_CATEGORY;
  constructor(public payload: Category) {
  }
}
export class AddCategorySuccessAction implements Action {
  readonly type = ADD_CATEGORY_SUCCESS;
  constructor(public payload: Category) {
  }
}
export class AddCategoryErrorAction implements Action {
  readonly type = ADD_CATEGORY_ERROR;
  constructor(public payload: Error) {
  }
}