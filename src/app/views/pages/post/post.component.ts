import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { loadPost } from 'src/app/core/actions/post.actions';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { selectOnePost } from 'src/app/core/selectors/post.selectors';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Post } from 'src/app/core/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostComponent implements OnInit {

  title = 'Post Template'
  content = `
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure culpa esse itaque sequi enim error molestiae placeat odit in quasi!</p>
  <img src="../../../../assets/images/image.png" alt="">
  `;
  post$: Observable<Post>;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('postId');
    this.store.dispatch(loadPost({ postId }));
    this.post$ = this.store.select(selectOnePost);
  }

}
