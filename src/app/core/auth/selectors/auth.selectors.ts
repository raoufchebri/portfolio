import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { State as AuthState } from '../reducers/auth.reducer';

export const selectAuth = (state: AppState) => state.auth;

export const selectAuthTokenKey = createSelector(
    selectAuth,
    (state: AuthState) => state.authTokenKey
);

export const selectToken = createSelector(
  selectAuth,
  (state: AuthState) => state.authTokenKey
);
