import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeGuard implements CanActivateChild {

  constructor(private _router: Router) { }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    // if (!localStorage.getItem('user'))
    // this._router.navigateByUrl('/login');

    return true;
  }
}
