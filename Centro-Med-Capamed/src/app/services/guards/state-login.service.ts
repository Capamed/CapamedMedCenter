import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StateLoginService implements CanActivateChild, CanActivate {

  constructor(private readonly _route: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const token = localStorage.getItem('tokenSession');
    try {
      if (token === "access") {
        return true;
      } else {
        alert('No Tienes Acceso')
        this._route.navigate(['/login']);
        return false;
      }
    } catch (err) {
      alert('No Tienes Acceso')
      this._route.navigate(['/login']);
      return false;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const token = localStorage.getItem('tokenSession');
    try {
      if (token === "access") {
        return true;
      } else {
        alert('No Tienes Acceso')
        this._route.navigate(['/login']);
        return false;
      }
    } catch (err) {
      alert('No Tienes Acceso')
      this._route.navigate(['/login']);
      return false;
    }
  }
}
