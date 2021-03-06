import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from 'src/app/core/auth/actions/auth.action';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.reducers';
import { selectToken, selectAuth } from 'src/app/core/auth/selectors/auth.selectors';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  private readonly properties = {
    email: [''],
    password: ['']
  };

  error$: Observable<string>;
  isLoggedIn: Observable<boolean>;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private router: Router
    ) { }

  ngOnInit() {
    this.error$ = this.store.select(selectAuth).pipe(map(state => state.error));
    this.loginForm = this.formBuilder.group(this.properties);
    
    this.store.select(selectToken).pipe(tap(token => {
      if (token) {
        this.router.navigateByUrl('/home');
      }
    })).subscribe();
  }

  login() {
    const credentials = {
      email : this.loginForm.controls['email'].value,
      password : this.loginForm.controls['password'].value
    };

    this.store.dispatch(login({ credentials }));
  }

}
