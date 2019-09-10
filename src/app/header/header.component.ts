import { State as AuthState } from './../features/auth/auth.reducer';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../features/auth/auth.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { authFeatureKey } from '../features/auth/auth.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  auth$: Observable<AuthState>;

  constructor(private authService: AuthService, private store: Store<State>) { }

  ngOnInit() {
    this.auth$ = this.store.select(authFeatureKey);
    // this.userName$ = this.authService.getUserName();
  }
}
