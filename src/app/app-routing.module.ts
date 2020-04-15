import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/pages/home/home.component';
import { LoginComponent } from './views/pages/login/login.component';
import { PostComponent } from './views/pages/post/post.component';
import { PageNotFoundComponent } from './views/pages/page-not-found/page-not-found.component';
import { PostsComponent as PostsPageComponent } from './views/pages/posts/posts.component';
import { CreatePostComponent } from './views/pages/create-post/create-post.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'create-post',
    component: CreatePostComponent,
  },
  {
    path: 'create-post/:postId',
    component: CreatePostComponent,
  },
  {
    path: 'post/:postId',
    component: PostComponent,
  },
  {
    path: 'posts',
    component: PostsPageComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
