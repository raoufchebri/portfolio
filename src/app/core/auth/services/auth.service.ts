import { Injectable } from '@angular/core';
import { of, Observable, throwError, EMPTY } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(credentials: { email: string, password: string }): Observable<User> {
    const { email, password } = credentials;
    if (email === 'admin@demo.com' && password === 'admin') {
      return of<User>({
        uid: '1',
        name: 'Admin',
        email,
        authTokenKey: 'access-token-8f3ae836da744329a6f93bf20594b5cc'
      });
    } else {
      return throwError('Wrong email or password');
    }
  }

  logout() {
    return of(localStorage.removeItem(environment.authTokenKey));
  }
}
