import { createAction, props } from '@ngrx/store';
import { Post } from '../models/post';

export const load = createAction('[Posts Page] Load Posts', props<{userId: string}>());
export const loadPost = createAction('[Post Page] Load Posts', props<{postId: string}>());
export const loadSuccess = createAction('[Posts Page] Load Posts Success', props<{posts: Post[]}>());
export const loadFailure = createAction('[Posts Page] Load Posts Failure', props<{error: string}>());
