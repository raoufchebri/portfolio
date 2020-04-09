import * as authActions from '../actions/auth.action';
import { createReducer, on, Action } from '@ngrx/store';
import { User } from '../models/user';

export interface State {
    isLoggedIn: boolean;
    authTokenKey: string;
    error: string;
}

export const initialState: State = {
    isLoggedIn: false,
    authTokenKey: undefined,
    error: undefined
};

const authReducer = createReducer(
    initialState,
    on(authActions.loginSuccess, (state, { authTokenKey }) => ({
        ...state,
        isLoggedIn: true,
        authTokenKey,
        error: undefined
    })),
    on(authActions.loginFailure, (state, { error }) => ({
        ...state,
        error
    })),
);

export function reducer(state: State | undefined, action: Action) {
    return authReducer(state, action);
}
