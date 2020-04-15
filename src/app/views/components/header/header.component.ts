import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { selectToken } from 'src/app/core/auth/selectors/auth.selectors';
import { Observable } from 'rxjs';
import { logout } from 'src/app/core/auth/actions/auth.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class MenuComponent implements OnInit {

  token$: Observable<string>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.token$ = this.store.select(selectToken);
  }

  logout() {
    this.store.dispatch(logout());
  }
}
