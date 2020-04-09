import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillComponent } from './views/components/skill/skill.component';
import { ListComponent } from './views/components/list/list.component';
import { MenuComponent } from './views/components/header/header.component';
import { TimelineComponent } from './views/components/timeline/timeline.component';
import { PostsComponent } from './views/components/posts/posts.component';
import { ContactComponent } from './views/components/contact/contact.component';
import { AboutComponent } from './views/components/about/about.component';
import { FooterComponent } from './views/components/footer/footer.component';
import { CardComponent } from './views/components/card/card.component';
import { LoginComponent } from './views/pages/login/login.component';
import { PostsComponent as PostsPageComponent } from './views/pages/posts/posts.component';
import { PostComponent } from './views/pages/post/post.component';
import { PageNotFoundComponent } from './views/pages/page-not-found/page-not-found.component';
import { HomeComponent } from './views/pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { reducers } from './app.reducers'
import { AuthEffects } from './core/auth/effects/auth.effects';
import { CreatePostComponent } from './views/pages/create-post/create-post.component';

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
    PageNotFoundComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    StoreModule.forRoot(reducers),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([
      AuthEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
