import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillComponent } from './layout/components/skill/skill.component';
import { ListComponent } from './layout/components/list/list.component';
import { MenuComponent } from './layout/components/header/header.component';
import { TimelineComponent } from './layout/components/timeline/timeline.component';
import { PostsComponent } from './layout/components/posts/posts.component';
import { ContactComponent } from './layout/components/contact/contact.component';
import { AboutComponent } from './layout/components/about/about.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { CardComponent } from './layout/components/card/card.component';
import { LoginComponent } from './layout/pages/login/login.component';
import { PostsComponent as PostsPageComponent } from './layout/pages/posts/posts.component';
import { PostComponent } from './layout/pages/post/post.component';
import { PageNotFoundComponent } from './layout/pages/page-not-found/page-not-found.component';
import { HomeComponent } from './layout/pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'posts',
    component: PostsPageComponent,
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SkillComponent,
    ListComponent,
    MenuComponent,
    TimelineComponent,
    PostsComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    CardComponent,
    LoginComponent,
    PostsPageComponent,
    PostComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
