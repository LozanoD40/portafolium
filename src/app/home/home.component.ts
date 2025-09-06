import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

// Declara tu función o variable global del script externo aquí
declare var tuFuncionDeScript: any; // <--- AGREGADO

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: '../../assets/CSS/styles_css/styles.css'
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(public auth: AuthService, private router: Router) { }

  logout() {
    this.auth.logout({ logoutParams: { returnTo: document.location.origin } });
  }

  public goToSection(fragment: string): void {
    this.router.navigate(['/'], { fragment });
  }

  ngOnInit() {
    // Lógica de inicialización
  }

  ngAfterViewInit() {
    // Llama a tu script externo aquí.
    // Esto se ejecuta después de que el HTML del componente esté listo.
    if (typeof tuFuncionDeScript !== 'undefined') {
      tuFuncionDeScript();
    }
  }
}
