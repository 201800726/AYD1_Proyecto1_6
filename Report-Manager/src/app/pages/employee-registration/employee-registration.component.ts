import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styles: [],
  providers: [DatePipe]
})
export class EmployeeRegistrationComponent implements OnInit {
  public usuario: Usuario;

  constructor(
    private _datepipe: DatePipe,
    private _usuarioService: UsuarioService
  ) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void { }

  public async registrar(): Promise<void> {
    try {
      this.usuario.fechaNacimiento = this._datepipe.transform(
        new Date(this.usuario.fechaNacimiento),
        'yyyy-MM-dd'
      )?.toString() || '';

      await this._usuarioService.registrarEmpleado(this.usuario);

      this.usuario = new Usuario();
    } catch (err) {
      console.log(err);
    }
  }
}
