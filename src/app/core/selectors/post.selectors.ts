import { createSelector } from '@ngrx/store';
import * as fromPost from '../reducers/post.reducers';
import { AppState } from '../../app.reducers';

export const selectPost = (state: AppState) => state.post;
export const selectPostCollection = createSelector(
    selectPost,
    (state: fromPost.State) => state.posts
);
export const selectOnePost = createSelector(
    selectPost,
    (state: fromPost.State) => state.post
);

