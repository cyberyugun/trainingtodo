import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('token')) {
      return state.url.startsWith('/home')
        ? true
        : (this.router.navigate(['/']), false);
    } else {
      return state.url.startsWith('/home')
        ? (this.router.navigate(['/']), false)
        : true;
    }
  }
}