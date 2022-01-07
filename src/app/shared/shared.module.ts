import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIModule } from './ui/ui.module';

import { WidgetModule } from './widget/widget.module';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { usersReducer, categoryReducer } from './index';
import { UserEffects, CategoryEffects } from './index';
import { EffectsModule } from '@ngrx/effects';
export const reducers: ActionReducerMap<any> = {
  users: usersReducer,
  categories: categoryReducer
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UIModule,
    WidgetModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffects, CategoryEffects])
  ]
})

export class SharedModule { }
