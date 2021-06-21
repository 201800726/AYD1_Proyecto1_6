import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthGuard } from 'src/app/guards/auth.guard';

import { Rol, TipoRol } from 'src/app/models/rol.model';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usuario: Usuario;

  constructor(
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _usuarioService: UsuarioService
  ) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    if (AuthGuard) {
      this._router.navigate(['/dashboard']);
    }
  }

  public async signin(): Promise<void> {
    try {
      const data = await this._usuarioService.authenticate(this.usuario);

      if (data['code'] === 200) {
        this.usuario = <Usuario>data['data'];
        this.usuario.roles = new Array<TipoRol>();

        await this.getRoles();

        if (this.usuario.roles.length > 0) {
          if (this.usuario.roles.length === 1
            && this.usuario.roles[0] === TipoRol.desconocido) {
            throw new Error();
          }

          localStorage.setItem('user', JSON.stringify(this.usuario));
          this._router.navigate(['/dashboard']);
        }
      }
    } catch (err) {
      this._snackBar.open('Usuario y/o contraseña incorrectos', 'CERRAR', { duration: 2500 });
    }
  }

  private async getRoles(): Promise<void | Error> {
    try {
      const data = await this._usuarioService.getRol(this.usuario);

      if (data['code'] === 200) {
        data['data'].forEach(
          (rol: Rol) => this.usuario.roles.push(
            new Rol(rol.rolID, rol.tipo).getTipo()
          )
        );

      }
    } catch (err) {
      this._snackBar.open('Error al iniciar sesión', 'CERRAR', { duration: 2500 });
    }
  }
}
