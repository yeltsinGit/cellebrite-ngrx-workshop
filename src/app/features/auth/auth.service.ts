import { Login, Logout } from './auth.actions';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private _userName: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor(private store: Store<State>, private router: Router) { }

  // getUserName(): Observable<string> {
  //   return this._userName.asObservable();
  // }

  // setUserName(name: string) {
  //   this._userName.next(name);
  // }

  login(userName: string) {
    this.store.dispatch(new Login(userName));
    // this.setUserName(userName);
    this.router.navigateByUrl('/feed');
  }

  logout() {
    this.store.dispatch(new Logout());
    // this.setUserName(null);
    this.router.navigateByUrl('/');
  }
}
