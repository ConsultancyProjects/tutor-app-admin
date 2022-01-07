import * as roleActions from './role.actions';
import {AppAction} from '../app.action';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Role} from '../../../shared';

export interface RoleState {
  data: Role[];
  selected: Role;
  action: string;
  done: boolean;
  error?: Error;
}

const initialState: RoleState = {
  data: [],
  selected: null,
  action: null,
  done: false,
  error: null
};

export function rolesReducer(state = initialState, action: AppAction): RoleState {
  // ...state create immutable state object
  switch (action.type) {
    /*************************
     * GET all roles actions
     ************************/
    case roleActions.GET_ALL_ROLES:
      return {...state, action: roleActions.GET_ALL_ROLES, done: false};
    case roleActions.GET_ALL_ROLES_SUCCESS:
      return {...state, data: action.payload, done: true};
    case roleActions.GET_ALL_ROLES_ERROR:
      return {...state, done: true, error: action.payload};


    case roleActions.UPDATE_ROLE:
      return {...state, selected: action.payload, action: roleActions.UPDATE_ROLE, done: false};
    case roleActions.UPDATE_ROLE_SUCCESS:
      {
        const index = state
          .data
          .findIndex(h => h.id === state.selected.id);
        if (index >= 0) {
          const data = [
            ...state.data.slice(0, index),
            state.selected,
            ...state.data.slice(index + 1)
          ];
          return {
            ...state,
            data,
            done: true,
            selected: null,
            error: null
          };
        }
        return state;
      }
    case roleActions.UPDATE_ROLE_ERROR:
      return {...state, selected: null, done: true, error: action.payload};
  }
  return state;
}

/*************************
 * SELECTORS
 ************************/
export const getRolesState = createFeatureSelector<RoleState>('roles');
export const getAllRoles = createSelector(getRolesState, (state: RoleState) => state.data);


