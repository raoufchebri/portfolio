import { Injectable } from '@angular/core';
import { Effect, Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of, Observable, defer } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import * as AuthActions from '../actions/auth.action';
import { environment } from 'src/environments/environment';
import { Action } from '@ngrx/store';

@Injectable()
export class AuthEffects {

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.login),
            mergeMap(({ credentials }) => this.authService.login(credentials)
                .pipe(
                    map(user => AuthActions.loginSuccess({ authTokenKey: user.authTokenKey })),
                    catchError(error => of(AuthActions.loginFailure({ error }))))
            ),
        );
    });

    loginSuccess$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.loginSuccess),
            /** An EMPTY observable only emits completion. Replace with your own observable stream */
            tap((action) => {
                localStorage.setItem(environment.authTokenKey, action.authTokenKey);
            }));
    });

    @Effect()
    init$: Observable<Action> = defer(() => {
        const userToken = localStorage.getItem(environment.authTokenKey);
        let observableResult = of({ type: 'NO_ACTION' });
        if (userToken) {
            observableResult = of(AuthActions.loginSuccess({ authTokenKey: userToken }));
        }
        return observableResult;
    });

    constructor(
        private actions$: Actions,
        private authService: AuthService
    ) { }
}
