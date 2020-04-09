import * as fromAuth from './core/auth/reducers/auth.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    auth: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {
    auth: fromAuth.reducer
};
