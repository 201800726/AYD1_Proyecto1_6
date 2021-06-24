import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { RegistroComponent } from './registro/registro.component';
import { DenunciaComponent } from './denuncia/denuncia.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'sign-up', component: RegistroComponent},
  { path: 'denuncia', component: DenunciaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
