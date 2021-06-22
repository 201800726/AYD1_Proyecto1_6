import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private auth: AuthService) { }
  user: any;

  ngOnInit(): void {
    this.user = this.auth.getUsuarioEnSesion();
  }

}
