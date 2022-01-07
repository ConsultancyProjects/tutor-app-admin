import {Action} from '@ngrx/store';
import {User} from '../../../core';


export const GET_USERS = '[ALL] Users';
export const GET_USERS_SUCCESS = '[ALL] Users Success';
export const GET_USERS_ERROR = '[ALL] Users Error';

/****************************************
 * GET all the users
 ****************************************/
export class GetAllUsers implements Action {
  readonly type = GET_USERS;
}

export class GetAllUsersSuccess implements Action {
  readonly type = GET_USERS_SUCCESS;

  constructor(public payload: User[]) {
  }
}

export class GetAllUsersError implements Action {
  readonly type = GET_USERS_ERROR;

  constructor(public payload: Error) {
  }
}
