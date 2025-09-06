import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  constructor(public auth: AuthService) { }

  login() {
    this.auth.loginWithRedirect();
  }
}