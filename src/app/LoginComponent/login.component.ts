import { AuthService } from '@auth0/auth0-angular';

export class LoginComponent {
  constructor(public auth: AuthService) { }

  login() {
    this.auth.loginWithRedirect();
  }
}