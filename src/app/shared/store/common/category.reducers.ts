import * as categoryActions from './category.actions';
import {AppAction} from '../app.action';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Category} from '../../models';

export interface CategoryState {
  data: Category[];
  action: string;
  done: boolean;
  error?: Error;
}

const initialState: CategoryState = {
  data: [],
  action: null,
  done: false,
  error: null
};

export function categoryReducer(state = initialState, action: AppAction): CategoryState {
  // ...state create immutable state object
  switch (action.type) {
    /*************************
     * GET all categories actions
     ************************/
    case categoryActions.GET_CATEGORIES:
      return {...state, action: categoryActions.GET_CATEGORIES, done: false};
    case categoryActions.GET_CATEGORIES_SUCCESS:
      return {...state, data: action.payload, done: true};
    case categoryActions.GET_CATEGORIES_ERROR:
      return {...state, done: true, error: action.payload};
  }
  return state;
}

/*************************
 * SELECTORS
 ************************/
export const getCategoriesState = createFeatureSelector<CategoryState>('categories');
export const getAllCategories = createSelector(getCategoriesState, (state: CategoryState) => state.data);

