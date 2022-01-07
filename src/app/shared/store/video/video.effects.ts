import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as userActions from './video.actions';
import {GetAllUsersError, GetAllUsersSuccess} from './video.actions';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, switchMap} from 'rxjs/operators';
import { UserProfileService } from 'src/app/core/services/user.service';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private svc: UserProfileService) {
  }

  
  getAllPlatforms$: Observable<Action> =createEffect(() => {
    return this
    .actions$.pipe(
      ofType(userActions.GET_USERS),
      switchMap(() => this.svc.getAll()),
      map(result => new GetAllUsersSuccess(result)),
      catchError((err) => [new GetAllUsersError(err)])
    );
    });
}
