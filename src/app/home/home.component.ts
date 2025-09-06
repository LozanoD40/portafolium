import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router'; // Importar Router

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: '../../assets/CSS/styles_css/styles.css'
})
export class HomeComponent implements OnInit, AfterViewInit {
  // Inyectar el Router en el constructor
  constructor(public auth: AuthService, private router: Router) { }

  logout() {
    this.auth.logout({ logoutParams: { returnTo: document.location.origin } });
  }

  // >>> Agrega esta función <<<
  public goToSection(fragment: string): void {
    this.router.navigate(['/'], { fragment });
  }

  ngOnInit() {
    // Lógica de inicialización
  }

  ngAfterViewInit() {
    // Lógica después de la vista
  }
}
