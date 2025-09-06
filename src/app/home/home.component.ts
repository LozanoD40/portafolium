// src/app/home/home.component.ts

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para usar *ngIf
import { AuthService } from '@auth0/auth0-angular'; // Para usar Auth0

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  constructor(public auth: AuthService) { }

  logout() {
    this.auth.logout({ logoutParams: { returnTo: document.location.origin } });
  }
}
