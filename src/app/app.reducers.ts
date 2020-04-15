import * as fromAuth from './core/auth/reducers/auth.reducer';
import * as fromPost from './core/reducers/post.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    auth: fromAuth.State;
    post: fromPost.State;
}

export const reducers: ActionReducerMap<AppState> = {
    auth: fromAuth.reducer,
    post: fromPost.reducer
};
