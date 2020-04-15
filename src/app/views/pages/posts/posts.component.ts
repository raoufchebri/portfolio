import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/core/models/post';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { load } from 'src/app/core/actions/post.actions';
import { selectPostCollection } from 'src/app/core/selectors/post.selectors';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  MAX_POSTS = 9;
  posts$: Observable<Post[]>;
  dummyArray: number[];
  userId = '1';
  constructor(private store: Store<AppState>, private http: HttpClient) { }

  ngOnInit() {
    this.dummyArray = Array.from(Array(this.MAX_POSTS));
    this.store.dispatch(load({userId: this.userId}));
    this.posts$ = this.store.select(selectPostCollection);
  }

  loadPosts() {
    this.MAX_POSTS += 9;
  }

}
