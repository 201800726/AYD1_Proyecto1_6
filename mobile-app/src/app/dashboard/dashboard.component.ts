import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }
  user: any;
  ngOnInit(): void {
    this.user = this.auth.getUsuarioEnSesion();
    //console.log(this.auth.isSessionActive())
  }
  logOut() {
    this.auth.endSession();
    this.router.navigate(['/'])
  }


}
