import { Injectable } from '@angular/core';
import { of, Observable, EMPTY, throwError } from 'rxjs';
import { User } from '../models/user';

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
        authTokenKey: 'TOKEN_KEY'
      });
    } else {
      return throwError('Wrong email or password');
    }
  }
}
