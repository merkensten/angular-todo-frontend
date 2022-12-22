import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

type CanActivateType =
  | boolean
  | UrlTree
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>;

@Injectable({
  providedIn: 'root',
})
export class GuestGuard implements CanActivate {
  userToken: boolean; // represents the authenticated user
  constructor(private authService: AuthService, private router: Router) {
    this.userToken = this.authService.getCurrentUserState();
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): CanActivateType {
    // If the user is not authenticated
    if (this.userToken) {
      // Redirect the user to the root route '/'
      return this.router.parseUrl('/app');
    }
    // If the user is authenticated, allow the route to be activated
    return true;
  }
}
