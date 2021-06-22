import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  /**
   * Contiene la información del formulario para el registro de un nuevo usuario.
   * @param user: contiene la información del usuario y la contraseña proporcionada a crear, utilizado para validar la existencia del usuario y que las contraseñas coincidan
   */
  signUpForm = this.fb.group({
    dpi: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthDate: ['', Validators.required],
    usuario: ['', Validators.required],
    contrasenia: ['', Validators.required],
    confirmedContrasenia: ['', Validators.required],
  })

  /**
   * Realiza el registro consumiendo el servicio AuthService
   */
  async signUp() {
    if (!this.signUpForm.valid) {
      if (this.signUpForm.value.dpi.length !== 13) {
        alert('El DPI debe de tener 13 caracteres')
        return
      }
      alert('Hay campos vacíos')
      return
    }
    if (this.signUpForm.value.contrasenia !== this.signUpForm.value.confirmedContrasenia) {
      alert('Las constraseñas no coinciden')
      return
    }
    try {
      const data = await this.auth.signUp(this.signUpForm.value);
      if (data['code'] === 200) {
        alert("Se ha registrado correctamente");
        this.router.navigate(['/'])
      }
    } catch (err) {
      alert(err.message)
    }
  }

}
