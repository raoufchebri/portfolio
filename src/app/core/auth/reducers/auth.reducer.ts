import * as authActions from '../actions/auth.action';
import { createReducer, on, Action } from '@ngrx/store';

export interface State {
    authTokenKey: string;
    error: string;
}

export const initialState: State = {
    authTokenKey: undefined,
    error: undefined
};

const authReducer = createReducer(
    initialState,
    on(authActions.loginSuccess, (state, { authTokenKey }) => ({
        ...state,
        authTokenKey
    })),
    on(authActions.loginFailure, (state, { error }) => ({
        ...state,
        error
    })),
    on(authActions.logoutSuccess, state => (initialState))
);

export function reducer(state: State | undefined, action: Action) {
    return authReducer(state, action);
}
