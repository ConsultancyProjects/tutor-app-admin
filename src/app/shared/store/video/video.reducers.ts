import * as userActions from './video.actions';
import {AppAction} from '../app.action';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {User} from '../../../core';

export interface UserState {
  data: User[];
  action: string;
  done: boolean;
  error?: Error;
}

const initialState: UserState = {
  data: [],
  action: null,
  done: false,
  error: null
};

export function usersReducer(state = initialState, action: AppAction): UserState {
  // ...state create immutable state object
  switch (action.type) {
    /*************************
     * GET all users actions
     ************************/
    case userActions.GET_USERS:
      return {...state, action: userActions.GET_USERS, done: false};
    case userActions.GET_USERS_SUCCESS:
      return {...state, data: action.payload, done: true};
    case userActions.GET_USERS_ERROR:
      return {...state, done: true, error: action.payload};
  }
  return state;
}

/*************************
 * SELECTORS
 ************************/
export const getUsersState = createFeatureSelector<UserState>('users');
export const getAllUsers = createSelector(getUsersState, (state: UserState) => state.data);

