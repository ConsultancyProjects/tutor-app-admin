import { Action, createAction } from '@ngrx/store';
import { Role } from 'src/app/shared';

export const GET_ALL_ROLES = 'GET_ALL_ROLES';
export const GET_ALL_ROLES_SUCCESS = 'GET_ALL_ROLES_SUCCESS';
export const GET_ALL_ROLES_ERROR = 'GET_ALL_ROLES_ERROR';


export const UPDATE_ROLE = 'UPDATE_ROLE';
export const UPDATE_ROLE_SUCCESS = 'UPDATE_ROLE_SUCCESS';
export const UPDATE_ROLE_ERROR = 'UPDATE_ROLE_ERROR';


export class GetAllRoles implements Action {
  readonly type = GET_ALL_ROLES;
}

export class GetAllRolesSuccess implements Action {
  readonly type = GET_ALL_ROLES_SUCCESS;

  constructor(public payload: Role[]) {
  }
}

export class GetAllRolesError implements Action {
  readonly type = GET_ALL_ROLES_ERROR;

  constructor(public payload: Error) {
  }
}



export class UpdateRole implements Action {
  readonly type = UPDATE_ROLE;
  constructor(public payload: Role) {
  }
}

export class UpdateRoleSuccess implements Action {
  readonly type = UPDATE_ROLE_SUCCESS;
}

export class UpdateRoleError implements Action {
  readonly type = UPDATE_ROLE_ERROR;

  constructor(public payload: Error) {
  }
}