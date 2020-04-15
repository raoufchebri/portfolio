import { createReducer, on, Action } from '@ngrx/store';
import { Post } from '../models/post';
import * as postActions from '../actions/post.actions';

export interface State {
    posts: Post[];
    post: Post;
}

export const initialState: State = {
    posts: [],
    post: undefined
};

const postReducer = createReducer(
    initialState,
    on(postActions.loadSuccess, (state, action) => ({ ...state, posts: action.posts, post: action.posts[0] })),
);

export function reducer(state: State | undefined, action: Action) {
    return postReducer(state, action);
}
