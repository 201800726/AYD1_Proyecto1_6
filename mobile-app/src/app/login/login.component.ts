import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoRol } from '../models/rol.model';
import { Usuario } from '../models/usuario.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario: new FormControl('', Validators.required),
    contrasenia: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    /*if (this.authService.isSessionActive()) {
      this.router.navigate(['/dashboard']);
    }
    */
  }

  /**
   * Realiza la autenticación consumiendo el servicio AuthService
   */
  async signIn() {
    if (!this.loginForm.valid) {
      alert('Hay campos vacíos')
      return
    }
    try {
      const data = await this.authService.authenticate(this.loginForm.value)
      if (data['code'] === 200) {
        let usuario = <Usuario>data['data'];
        this.authService.setUsuarioEnSesion(usuario);
        this.router.navigate(['/dashboard']);
      }
    } catch (err) {
      alert(err.message)
    }
  }

}
