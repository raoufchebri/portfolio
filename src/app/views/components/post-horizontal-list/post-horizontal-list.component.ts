import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { selectPostCollection } from 'src/app/core/selectors/post.selectors';
import { load } from 'src/app/core/actions/post.actions';
import { map } from 'rxjs/operators';
import { Post } from 'src/app/core/models/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-horizontal-list',
  templateUrl: './post-horizontal-list.component.html',
  styleUrls: ['./post-horizontal-list.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(load({ userId: '1' }));
    this.posts$ = this.store.select(selectPostCollection).pipe(map(posts => posts.slice(0, 4)));
  }

}
