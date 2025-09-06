import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
declare var inicializarHomePage: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: '../../assets/CSS/styles_css/styles.css'
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(public auth: AuthService, private router: Router, private el: ElementRef) { }

  logout() {
    this.auth.logout({ logoutParams: { returnTo: document.location.origin } });
  }

  goToSection(sectionId: string): void {
    const sectionElement = this.el.nativeElement.querySelector(`#${sectionId}`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  ngOnInit() {
    // Lógica de inicialización
  }

  ngAfterViewInit() {
    if (typeof inicializarHomePage !== 'undefined') {
      inicializarHomePage();
    }
  }
}
