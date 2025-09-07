import { Component, OnInit, AfterViewInit, ElementRef, signal, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header id="header">
      <h1>Portafolio</h1>
      <button class="hamburger-menu" [class.active]="isMenuOpen()" (click)="toggleMenu()" aria-label="Abrir menú">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav class="main-nav" [class.active]="isMenuOpen()">
        <a class="nav-link" (click)="goToSection('home-section')"><i class="fas fa-home"></i>Acerca de</a>
        <a class="nav-link" (click)="goToSection('skills')"><i class="fas fa-hammer"></i> Habilidades</a>
        <a class="nav-link" (click)="goToSection('proyect')"><i class="fas fa-code"></i> Proyectos</a>
        <a class="nav-link" (click)="goToSection('reference')"><i class="fas fa-user"></i> Referencias</a>
        <a class="nav-link" (click)="goToSection('contact')"><i class="fas fa-envelope"></i> Contacto</a>

        <button id="toggleTheme" class="theme-btn" (click)="toggleTheme()" aria-label="Cambiar tema">
          <i [class]="isDarkTheme() ? 'fas fa-sun' : 'fas fa-moon'"></i>
        </button>

        @if (auth.isAuthenticated$) {
          <button class="logout-btn" (click)="logout()" title="Cerrar sesión">
            <i class="fas fa-sign-out-alt"></i>
          </button>
        }
      </nav>
    </header>

    <main>
      <section id="home-section" class="contenido">
        <h2 class="titulo">Acerca de mí</h2>
        <div id="contenido_home">
          <img id="imagen_home" src="https://placehold.co/200x200/505050/ffffff?text=Tu+Foto" alt="Mi Foto">
          <p>
            ¡Hola! Soy un estudiante apasionado por el desarrollo de software, con un enfoque en la programación backend y las tecnologías web. Mi viaje comenzó con la curiosidad de cómo las aplicaciones cobran vida y se comunican entre sí. Me encanta enfrentar desafíos, resolver problemas complejos y colaborar en proyectos que impactan positivamente.
          </p>
        </div>
      </section>

      <section id="skills" class="contenido">
        <h2 class="titulo">Habilidades</h2>
        <div class="skills-grid">
          <div class="skill-item">
            <h3>HTML y CSS</h3>
            <div class="progress-bar-container">
              <div class="progress-bar" style="width:90%"></div>
            </div>
          </div>
          <div class="skill-item">
            <h3>JavaScript</h3>
            <div class="progress-bar-container">
              <div class="progress-bar" style="width:80%"></div>
            </div>
          </div>
          <div class="skill-item">
            <h3>Angular</h3>
            <div class="progress-bar-container">
              <div class="progress-bar" style="width:75%"></div>
            </div>
          </div>
          <div class="skill-item">
            <h3>Bases de Datos</h3>
            <div class="progress-bar-container">
              <div class="progress-bar" style="width:70%"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="proyect" class="contenido">
        <h2 class="titulo">Proyectos</h2>
        <div class="projects-container">
          <div class="card_project">
            <a href="#">
              <div class="card_content">
                <img src="https://placehold.co/300x140/505050/ffffff?text=Proyecto+1" alt="Proyecto 1">
                <p>Descripción del Proyecto 1</p>
              </div>
            </a>
          </div>
          <div class="card_project">
            <a href="#">
              <div class="card_content">
                <img src="https://placehold.co/300x140/505050/ffffff?text=Proyecto+2" alt="Proyecto 2">
                <p>Descripción del Proyecto 2</p>
              </div>
            </a>
          </div>
          <div class="card_project">
            <a href="#">
              <div class="card_content">
                <img src="https://placehold.co/300x140/505050/ffffff?text=Proyecto+3" alt="Proyecto 3">
                <p>Descripción del Proyecto 3</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="reference" class="contenido">
        <h2 class="titulo">Referencias</h2>
        <div class="carousel-container">
          <div class="carousel-slides" [style.transform]="'translateX(' + (-currentSlide() * 100) + '%)'">
            <div class="slide">
              <div class="referencia">
                <div class="referecia_cuerpo">
                  <img src="https://placehold.co/150x150/505050/ffffff?text=Persona+1" alt="Persona 1">
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero."
                  </p>
                </div>
              </div>
            </div>
            <div class="slide">
              <div class="referencia">
                <div class="referecia_cuerpo">
                  <img src="https://placehold.co/150x150/505050/ffffff?text=Persona+2" alt="Persona 2">
                  <p>
                    "Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-button prev-button" (click)="prevSlide()">&#10094;</button>
          <button class="carousel-button next-button" (click)="nextSlide()">&#10095;</button>
        </div>
        <div class="carousel-indicators">
          <span class="indicator" [class.active]="currentSlide() === 0" (click)="goToSlide(0)"></span>
          <span class="indicator" [class.active]="currentSlide() === 1" (click)="goToSlide(1)"></span>
        </div>
      </section>

      <section id="contact" class="contenido">
        <h2 class="titulo">Contacto</h2>
        <form>
          <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" id="name" class="formulario_input_nm">
          </div>
          <div class="form-group">
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" class="formulario_input_nm">
          </div>
          <div class="form-group">
            <label for="message">Mensaje:</label>
            <textarea id="message" class="formulario_input_ta"></textarea>
          </div>
          <button type="submit" class="formulario_enviar">Enviar</button>
        </form>
      </section>
    </main>

    <footer>
      <p class="footer_p">Redes Sociales</p>
      <ul class="footer_lu">
        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
      </ul>
    </footer>
  `,
  styles: [`
    /*
      Usamos :host para aplicar estilos al componente principal (<app-home>)
      Esto nos permite simular los estilos del body de manera segura en Angular
    */
    :host {
      --color-text: #333;
      --color-background: #fff;
      --color-background-altern: rgba(255, 255, 255, 0.8);
      --color-text-altern: #666;
      --color-text-hover: #007bff;
      --color-accent: #f0f0f0;
      --color-border: #ccc;
      --color-error: #dc3545;

      display: flex;
      justify-content: center;
      align-items: flex-start;
      min-height: 100vh;
      background: var(--background) no-repeat center center fixed;
      background-size: cover;
      flex-direction: column;
      color: var(--color-text);
      font-family: 'Arial', sans-serif;
    }
    
    /* Header */
    #header {
      background-color: var(--color-background);
      color: var(--color-text);
      font-weight: 700;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 100;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      row-gap: 1rem;
      padding: 1rem 20px;
    }

    #header h1 {
      color: var(--color-text-altern);
      font-size: clamp(1rem, 5vw, 7rem);
      font-weight: 700;
    }

    nav {
      display: flex;
      gap: 1rem;
    }

    nav a {
      text-decoration: none;
      font-size: clamp(0.8rem, 1vw, 3rem);
      color: var(--color-text-altern);
      transition: color 0.5s;
      position: relative;
    }

    nav a:hover {
      color: var(--color-text-hover);
    }

    nav a::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      height: 2px;
      width: 0;
      background-color: var(--color-text-hover);
      transition: width 0.5s;
    }

    nav a:hover::after {
      width: 100%;
    }

    .nav-link i {
      margin-right: 0.5rem;
      color: inherit;
      font-size: 1rem;
      vertical-align: middle;
    }

    .theme-btn {
      background: none;
      border: none;
      font-size: 0.9rem;
      color: var(--color-text);
      cursor: pointer;
      transition: color var(--transition-speed), transform var(--transition-speed);
    }

    .theme-btn:hover {
      color: var(--color-text-hover);
      transform: scale(1.1);
    }

    .logout-btn {
      background: none;
      border: none;
    }

    /* Estilos para el menú hamburguesa */
    .hamburger-menu {
      display: none;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 10px;
      position: relative;
      z-index: 101;
    }

    .hamburger-menu span {
      display: block;
      width: 25px;
      height: 3px;
      margin: 5px 0;
      background-color: var(--color-text);
      transition: all 0.3s ease;
    }

    .hamburger-menu.active span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    .hamburger-menu.active span:nth-child(2) {
      opacity: 0;
    }

    .hamburger-menu.active span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }

    @media (max-width: 768px) {
      .hamburger-menu {
        display: block;
      }
      .main-nav {
        position: fixed;
        top: 0;
        right: -100%;
        width: 70%;
        height: 100vh;
        background-color: var(--color-background);
        flex-direction: column;
        padding: 80px 20px 20px;
        transition: right 0.3s ease;
        z-index: 100;
      }
      .main-nav.active {
        right: 0;
      }
    }

    /* La solución para el scroll que solapa */
    [id] {
      padding-top: 80px;
      margin-top: -80px;
    }

    main {
      padding-top: 100px; /* Para que el contenido no quede debajo del header */
      width: 100%;
    }
    
    /* Contenido */
    .contenido {
      padding: 2rem;
      max-width: 97%;
      background: var(--color-background-altern);
      border-radius: 15px;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      text-align: justify;
      margin: 2rem auto;
      margin-left: 15px;
      box-sizing: border-box;
    }

    .titulo {
      text-align: center;
      color: var(--color-text-altern);
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    @media (max-width: 768px) {
      .contenido {
        margin-right: 15px;
      }
    }

    /* Sección "Acerca de mí" */
    #home-section {
      padding-top: 120px;
    }

    #imagen_home {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      margin-bottom: 1rem;
      object-fit: cover;
    }

    #contenido_home {
      display: grid;
      grid-template-columns: 1fr 8.8fr 0.2fr;
      gap: 4rem;
      align-items: center;
      justify-content: space-between;
    }

    .skill_li {
      background-color: var(--color-accent);
      flex-direction: column;
      text-align: center;
      border-radius: 10%;
      display: flex;
      margin: 0 0 2.5rem 0;
    }

    @media (max-width: 768px) {
      #home-section {
        padding-top: 60px;
      }
      #contenido_home {
        grid-template-columns: 1fr 1fr;
      }
    }

    /* Sección "Habilidades" */
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      margin-top: 40px;
      margin-left: 1rem;
      margin-right: 1rem;
    }

    .skill-item {
      background-color: var(--color-background-altern);
      padding: 25px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
      text-align: left;
    }

    .skill-item h3 {
      margin-bottom: 15px;
      color: var(--color-text);
    }

    .progress-bar-container {
      background-color: var(--color-border);
      border-radius: 5px;
      height: 15px;
      overflow: hidden;
    }

    .progress-bar {
      height: 100%;
      background-color: var(--color-text-altern);
      width: 0;
      border-radius: 5px;
      transition: width 1.5s ease-out;
    }

    /* Sección "Proyectos" */
    .projects-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
    }

    .card_project {
      background-color: var(--color-background-altern);
      flex: 1 1 250px;
      max-width: 300px;
      aspect-ratio: 5/6;
      border-radius: 10%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      transition: transform 0.3s, box-shadow 0.3s;
      overflow: hidden;
    }

    .card_project:hover {
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
      transform: translateY(-10px);
    }

    .card_project a {
      color: inherit;
      text-decoration: none;
      width: 100%;
      height: 100%;
    }

    .card_content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    .card_content img {
      width: 100%;
      max-height: 140px;
      border-radius: 10%;
      object-fit: cover;
    }

    .card_content p {
      font-size: 1rem;
      text-align: center;
      word-wrap: break-word;
      overflow-wrap: break-word;
      margin: 0.2rem 0;
    }

    @media (max-width: 768px) {
      .projects-container {
        flex-direction: column;
        align-items: center;
      }
      .card_project {
        width: 90%;
        max-width: 450px;
        aspect-ratio: auto;
      }
      .card_content img {
        width: 80%;
        max-height: 180px;
      }
      .card_content p {
        font-size: 1rem;
        margin: 0.5rem 10px;
      }
    }

    /* Sección "Referencias" */
    .referencia {
      background-color: var(--color-background-altern);
      width: 100%;
      height: auto;
      min-height: 300px;
      border-radius: 12px;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      margin: 0 0 2rem 0;
    }

    .referecia_cuerpo {
      display: grid;
      grid-template-columns: 1fr 6fr;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      gap: 20px;
      width: 100%;
    }

    .referecia_cuerpo img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }

    .carousel-container {
      position: relative;
      width: 100%;
      overflow: hidden;
      margin-bottom: 2rem;
    }

    .carousel-slides {
      display: flex;
      transition: transform 0.5s ease;
      width: 100%;
    }

    .slide {
      min-width: 100%;
      box-sizing: border-box;
      margin: 0;
      padding: 40px 80px;
    }

    .carousel-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: var(--color-text-altern);
      color: var(--color-background);
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      font-size: 1.5rem;
      cursor: pointer;
      z-index: 10;
      opacity: 0.7;
      transition: opacity 0.3s ease;
    }

    .carousel-button:hover {
      opacity: 1;
    }

    .prev-button {
      left: 10px;
    }

    .next-button {
      right: 10px;
    }

    .carousel-indicators {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
    }

    .indicator {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: var(--color-border);
      margin: 0 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .indicator.active {
      background-color: var(--color-text-altern);
    }

    /* Sección "Contacto" */
    .form-group {
      display: flex;
      flex-direction: column;
    }

    .formulario_input_nm {
      margin-bottom: 1rem;
      padding: 0.5rem;
      border: 3px solid var(--color-border);
      border-radius: 5px;
    }

    .formulario_input_ta {
      width: 100%;
      margin-bottom: 1rem;
      padding: 0.5rem;
      border: 3px solid var(--color-border);
      border-radius: 5px;
    }

    .formulario_enviar {
      padding: 0.5rem;
      border: 2px solid var(--color-border);
      border-radius: 5px;
      width: 100%;
    }

    .error-message {
      color: var(--color-error);
      font-size: 0.8rem;
      margin-top: 0.2rem;
      margin-bottom: 0.3rem;
    }
    
    /* Footer */
    footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;
      width: 100%;
    }

    .footer_lu {
      font-size: 1.5rem;
      display: flex; 
      gap: 13%; 
      list-style: none;
      margin-left: 1rem;
      margin-bottom: 2rem;
    }

    .footer_lu a {
      color: var(--color-text);
      background: var(--color-background);
      padding: 0.5rem 1rem;
      border-radius: 8px;
      transition: background 0.3s;
    }

    .footer_lu a:hover {
      background: var(--color-background-altern);
    }

    .footer_p {
      color: var(--color-text-altern);
      padding: 0.5rem 1rem;
    }

    @media (max-width: 768px) {
      .footer_lu {
        gap: 4%; 
        flex-wrap: wrap; 
        justify-content: center; 
      }
      
      .footer_lu a {
        padding: 0.4rem 0.8rem; 
      }
    }

    @media (max-width: 480px) {
      .footer_lu {
        gap: 2%; 
      }
      
      .footer_lu a {
        padding: 0.3rem 0.6rem; 
        font-size: 1.2rem;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, AfterViewInit {
  isMenuOpen = signal<boolean>(false);
  isDarkTheme = signal<boolean>(false);
  currentSlide = signal<number>(0);

  @HostBinding('class.dark-theme') get isDark() {
    return this.isDarkTheme();
  }

  constructor(public auth: AuthService, private router: Router, private el: ElementRef) { }

  ngOnInit() {
    // Aquí puedes realizar cualquier inicialización al cargar el componente
  }

  ngAfterViewInit() {
    // Las animaciones de las barras de progreso se inicializan aquí
    const bars = this.el.nativeElement.querySelectorAll('.progress-bar');
    bars.forEach((bar: HTMLElement) => {
      const width = bar.style.width;
      bar.style.width = '0'; // reset for animation
      setTimeout(() => {
        bar.style.width = width;
      }, 100);
    });
  }

  logout() {
    this.auth.logout({ logoutParams: { returnTo: document.location.origin } });
  }

  goToSection(sectionId: string): void {
    this.isMenuOpen.set(false); // Cierra el menú al hacer clic en un enlace de navegación
    const sectionElement = this.el.nativeElement.querySelector(`#${sectionId}`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }

  toggleTheme() {
    this.isDarkTheme.update(value => !value);
  }

  prevSlide() {
    this.currentSlide.update(value => (value > 0) ? value - 1 : 1); // Asume 2 diapositivas
  }

  nextSlide() {
    this.currentSlide.update(value => (value < 1) ? value + 1 : 0); // Asume 2 diapositivas
  }
  
  goToSlide(index: number) {
    this.currentSlide.set(index);
  }
}