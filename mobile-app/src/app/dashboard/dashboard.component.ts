import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth:AuthService) { }
  user:any;
  ngOnInit(): void {
    console.log(this.auth.getUsuarioEnSesion())
    this.user = this.auth.getUsuarioEnSesion();
    //console.log(this.auth.isSessionActive())
  }

  

}
