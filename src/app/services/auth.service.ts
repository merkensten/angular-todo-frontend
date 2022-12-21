import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //   public userState = false;
  private readonly userSource$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  //   public getCurrentUserState(): Observable<boolean> {
  //     return this.userSource$;
  //   }

  getCurrentUserState() {
    return this.userSource$.getValue();
  }

  public loginUser() {
    this.userSource$.next(true);
    console.log(this.getCurrentUserState());
    console.log('loginUser() called');
  }

  public logoutUser() {
    this.userSource$.next(false);
    console.log(this.getCurrentUserState());
    console.log('logoutUser() called');
  }
}
