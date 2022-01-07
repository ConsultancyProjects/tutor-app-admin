import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as roleActions from './role.actions';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, switchMap, concatMap} from 'rxjs/operators';
import { RoleService } from 'src/app/shared';
import { UpdateRole } from '.';

@Injectable()
export class RoleEffects {
  constructor(private actions$: Actions, private roleService: RoleService) {
  }
  getAllRoles$: Observable<Action> = createEffect(() => {
    return this
    .actions$.pipe(
      ofType(roleActions.GET_ALL_ROLES),
      switchMap(() => this.roleService.getAll()),
      map(result => new roleActions.GetAllRolesSuccess(result)),
      catchError((err) => [new roleActions.GetAllRolesError(err)])
    );
    });

  updateRole$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(roleActions.UPDATE_ROLE),
      map((action:UpdateRole) => action.payload),
      switchMap((data) => this.roleService.updateRole(data.id, data)),
      map(result => new roleActions.UpdateRoleSuccess()),
      catchError((err) => [new roleActions.GetAllRolesError(err)])
    ),
    {dispatch: false}
  );
}
