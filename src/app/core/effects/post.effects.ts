import { createEffect, ofType, Actions } from '@ngrx/effects';
import * as postActions from '../actions/post.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { PostService } from '../services/post/post.service';
import { of } from 'rxjs';

@Injectable()
export class PostEffects {
    loadPosts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(postActions.load),
            /** An EMPTY observable only emits completion. Replace with your own observable stream */
            mergeMap(({userId}) => this.postService.getAll(userId)
                .pipe(
                    map(posts => postActions.loadSuccess({ posts }),
                        catchError(error => of(postActions.loadFailure({ error }))))
                )));
    });

    loadPost$ = createEffect(() => {
        return this.actions$.pipe(
                ofType(postActions.loadPost),
                mergeMap(({postId}) =>
                    this.postService.get(postId).pipe(
                        map(post => postActions.loadSuccess({ posts: [post] })),
                        catchError(error => of(postActions.loadFailure({ error }))))
                    ),
        );
    });

    constructor(
        private actions$: Actions,
        private postService: PostService
    ) { }
}



