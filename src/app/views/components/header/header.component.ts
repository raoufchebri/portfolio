import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { selectIsLoggedInProperty } from 'src/app/core/auth/selectors/auth.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class MenuComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.isLoggedIn$ = this.store.select(selectIsLoggedInProperty);
  }

}
