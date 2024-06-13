import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  token: string = '';

  constructor(
      private router: Router) { }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
  return new Promise((resolve, reject ) => {
    const url = state.url.split('/');
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token')!;
      resolve(true);
    } else {

      this.router.navigate(['/login']);
      resolve(false);
    }
  });
}
canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
  return new Promise((resolve, reject ) => {
    const url = state.url.split('/');
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token')!;
      resolve(true);
    } else {
      this.router.navigate(['/login']);
      resolve(false);
    }
  });
}

}
