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
export class HomeComponent implements OnInit, AfterViewInit { // Nombre de clase corregido
  
  // Declara el servicio de Auth0 como una propiedad pública en el constructor
  constructor(public auth: AuthService) { }

  ngOnInit() {
    // Lógica de inicialización
  }

  ngAfterViewInit() {
    // Aquí puedes mover la lógica del JavaScript
    this.initializeThemeToggle();
    this.initializeHamburgerMenu();
    this.initializeProgressBars();
    // etc.
  }

  // Define el método de logout para ser llamado desde el HTML
  logout() {
    this.auth.logout({ logoutParams: { returnTo: document.location.origin } });
  }

  // Métodos privados para la lógica JavaScript
  private initializeThemeToggle() {
    const toggleBtn = document.getElementById("toggleTheme");
    const icon = toggleBtn?.querySelector("i");

    toggleBtn?.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      if (document.body.classList.contains("light-mode")) {
        icon?.classList.replace("fa-moon", "fa-sun");
      } else {
        icon?.classList.replace("fa-sun", "fa-moon");
      }
    });
  }

  private initializeHamburgerMenu() {
    // Mover aquí la lógica del menú hamburguesa
  }

  private initializeProgressBars() {
    // Mover aquí la lógica de las barras de progreso
  }
}
