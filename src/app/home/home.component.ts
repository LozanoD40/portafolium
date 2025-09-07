import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: '../../assets/CSS/styles_css/styles.css'
})
export class HomeComponent implements OnInit, AfterViewInit {
  mostrarTextoExtra = false;

  constructor(public auth: AuthService, private router: Router, private el: ElementRef) { }

  logout() {
    this.auth.logout({ logoutParams: { returnTo: document.location.origin } });
  }

  goToSection(sectionId: string): void {
    const sectionElement = this.el.nativeElement.querySelector(`#${sectionId}`);
    if (sectionElement) {
      const headerElement = document.querySelector<HTMLElement>('#header');
      const headerHeight = headerElement?.offsetHeight || 80;
      const elementPosition = sectionElement.offsetTop;
      const offsetPosition = elementPosition - headerHeight - 20; // 20px de margen adicional
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  toggleTexto() {
    this.mostrarTextoExtra = !this.mostrarTextoExtra;
  }

  ngOnInit() {
    // La lógica de inicialización del componente puede ir aquí.
  }

  ngAfterViewInit() {
    // Lógica que depende de la vista, como la inicialización de carruseles
  }
}