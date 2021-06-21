import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';

import { TipoRol } from '../models/rol.model';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeGuard implements CanActivateChild {

  constructor(private _router: Router) { }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    const usuarioStorage: string | null = localStorage.getItem('user');

    if (usuarioStorage !== null) {
      const usuario: Usuario = <Usuario>JSON.parse(usuarioStorage);

      if (!usuario.roles.includes(TipoRol.empleado)) {
        this._router.navigateByUrl('/dashboard');
      }

      return true;
    }

    this._router.navigateByUrl('/login');
    return false;
  }
}
