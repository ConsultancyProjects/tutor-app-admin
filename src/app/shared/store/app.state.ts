import * as fromUser from './auth/user.reducers';
import * as fromCategory from './common/category.reducers';

export interface AppState {
  users: fromUser.UserState;
  categories: fromCategory.CategoryState;
}
