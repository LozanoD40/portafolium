import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
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
      <button class="hamburger-menu" aria-label="Abrir menú" aria-expanded="false" aria-controls="main-nav">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav class="main-nav">
        <a class="nav-link" (click)="goToSection('home')" aria-label="Inicio"><i class="fas fa-home"></i>Acerca de</a>
        <a class="nav-link" (click)="goToSection('skills')" aria-label="Habilidades"><i class="fas fa-hammer"></i> Habilidades</a>
        <a class="nav-link" (click)="goToSection('proyect')" aria-label="Proyectos"><i class="fas fa-code"></i> Proyectos</a>
        <a class="nav-link" (click)="goToSection('reference')" aria-label="Referencias"><i class="fas fa-user"></i> Referencias</a>
        <a class="nav-link" (click)="goToSection('contact')" aria-label="Contacto"><i class="fas fa-envelope"></i> Contacto</a>
        <button id="toggleTheme" class="theme-btn" aria-label="Cambiar tema">
          <i class="fas fa-moon"></i> 
        </button>
        <button *ngIf="auth.isAuthenticated$ | async" (click)="logout()" class="logout-btn" title="Cerrar sesión" aria-label="Cerrar sesión">
          <i class="fas fa-sign-out-alt"></i>
        </button>
      </nav> 
    </header>
    <main id="main-content">
      <section id="home">
        <div class="contenido" id="home_contenido">
          <h2 class="titulo">Acerca de mi</h2>
          <div id="contenido_home">
            <img src="assets/imagenes/foto-de-perfil.jpg" alt="Foto de perfil" id="imagen_home">
            <p>¡Hola! Soy <b>Diego Agustin Lozano Mora</b>, un programador en formación apasionado por crear soluciones
              prácticas y creativas con código.
              Me interesa el desarrollo web y disfruto transformar ideas en proyectos funcionales.
              <br>Actualmente me estoy especializando en HTML, CSS y JavaScript, mientras exploro frameworks modernos y
              buenas prácticas de programación.
              Mi objetivo es crecer como desarrollador fullstack y aportar a proyectos que generen impacto positivo. Soy
              curioso, autodidacta y me motiva aprender algo nuevo cada día.
            </p>
          </div>
        </div>
      </section>
      <section id="skills" class="skills-section">
        <div class="contenido">
          <h2 class="titulo">Mis Habilidades</h2>
          <div class="skills-grid">
            <div class="skill-item">
              <h3>HTML</h3>
              <div class="progress-bar-container">
                <div class="progress-bar html" data-progress="90"></div>
              </div>
            </div>
            <div class="skill-item">
              <h3>CSS</h3>
              <div class="progress-bar-container">
                <div class="progress-bar html" data-progress="85"></div>
              </div>
            </div>
            <div class="skill-item">
              <h3>JavaScript</h3>
              <div class="progress-bar-container">
                <div class="progress-bar html" data-progress="70"></div>
              </div>
            </div>
            <div class="skill-item">
              <h3>Node-JS</h3>
              <div class="progress-bar-container">
                <div class="progress-bar html" data-progress="60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="proyect">
        <div class="contenido">
          <h2 class="titulo">Proyectos</h2>
          <div class="projects-container">
            <div class="card_project">
              <a href="https://lozanod40.github.io/landing-page/" target="_blank">
                <div class="card_content">
                  <img src="assets/imagenes/foto_proyecto1_landing-page.jpg" alt="Imagen de una Landing Page">
                  <p>Una página de presentación personal</p>
                  <p><b>HTML + CSS</b></p>
                </div>
              </a>
            </div>
            <div class="card_project">
              <a href="https://lozanod40.github.io/Reloj-digital-en-vivo/" target="_blank">
                <div class="card_content">
                  <img src="assets/imagenes/foto_proyecto2_reloj-digital.jpg" alt="Imagen de un Reloj Digital">
                  <p>Una página de un reloj digital en vivo</p>
                  <p><b>HTML + CSS + JavaScript</b></p>
                </div>
              </a>
            </div>
            <div class="card_project">
              <a href="https://lozanod40.github.io/Calculadora-basica/" target="_blank">
                <div class="card_content">
                  <img src="assets/imagenes/foto_proyecto3_calculadora-basica.jpg" alt="Imagen de una calculadora">
                  <p>Una página de una calculadora</p>
                  <p><b>HTML + CSS + JavaScript</b></p>
                </div>
              </a>
            </div>
            <div class="card_project">
              <a href="https://lozanod40.github.io/Galeria-de-foto/" target="_blank">
                <div class="card_content">
                  <img src="assets/imagenes/foto_proyecto4_galeria-de-foto.jpg" alt="Imagen de una galería de fotos">
                  <p>Una página de una galería de fotos</p>
                  <p><b>HTML + CSS + JavaScript</b></p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="reference">
        <div class="contenido">
          <h2 class="titulo">Referencias</h2>
          <div class="carousel-container">
            <button class="carousel-button prev-button">&lt;</button>
            <button class="carousel-button next-button">&gt;</button>
            <div class="carousel-slides">
              <div class="referencia slide">
                <h3>María López - Profesora de Programación Web</h3>
                <div class="referecia_cuerpo">
                  <img src="assets/imagenes/foto_referencia_1.jpg" alt="Foto de María López">
                  <p>"Tuve la oportunidad de guiarlo en varios proyectos académicos, y siempre mostró gran interés por
                    aprender nuevas tecnologías. Su capacidad para resolver problemas y su constancia destacan sobre la
                    media de los estudiantes."</p>
                </div>
              </div>
              <div class="referencia slide">
                <h3>Carlos Méndez - Compañero de equipo en un hackathon</h3>
                <div class="referecia_cuerpo">
                  <img src="assets/imagenes/foto_referencias_2.jpg" alt="Foto de Carlos Méndez">
                  <p>"Trabajamos juntos en un hackathon y demostró liderazgo, creatividad y compromiso. Su habilidad para
                    organizar las ideas del grupo y transformar conceptos en código funcional fue clave para terminar el
                    proyecto a tiempo."</p>
                </div>
              </div>
              <div class="referencia slide">
                <h3>Ana Torres - Supervisora en prácticas profesionales</h3>
                <div class="referecia_cuerpo">
                  <img src="assets/imagenes/foto_referencia_3.jpg" alt="Foto de Ana Torres">
                  <p>"Durante sus prácticas en la empresa, siempre cumplió con las tareas asignadas de manera eficiente y
                    con atención al detalle. Su iniciativa para mejorar procesos técnicos lo hace un candidato valioso
                    para cualquier equipo de desarrollo."</p>
                </div>
              </div>
              <div class="referencia slide">
                <h3>José Ramírez - Amigo y colaborador en proyectos personales</h3>
                <div class="referecia_cuerpo">
                  <img src="assets/imagenes/foto_referencia_4.jpg" alt="Foto de José Ramírez">
                  <p>"He colaborado con él en varios proyectos independientes, y puedo decir que siempre está dispuesto a
                    investigar y aprender lo necesario para llevar las ideas a la realidad. Su entusiasmo contagia a
                    quienes lo rodean."</p>
                </div>
              </div>
              <div class="referencia slide">
                <h3>Mario Fernández - Mentor en desarrollo personal</h3>
                <div class="referecia_cuerpo">
                  <img src="assets/imagenes/foto_referencia_5.jpg" alt="Foto de Mario Fernández">
                  <p>"Es una persona proactiva, con gran disposición para aprender y mejorar constantemente. Su actitud
                    positiva y capacidad para adaptarse a diferentes entornos lo convierten en alguien confiable y con
                    mucho potencial."</p>
                </div>
              </div>
            </div>
            <div class="carousel-indicators">
              <span class="indicator active" data-index="0"></span>
              <span class="indicator" data-index="1"></span>
              <span class="indicator" data-index="2"></span>
              <span class="indicator" data-index="3"></span>
              <span class="indicator" data-index="4"></span>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div class="contenido">
          <h2 class="titulo">Contacto</h2>
          <form id="contactForm" class="formulario" action="https://formspree.io/f/xzzaagrg" method="POST">
            <div class="form-group">
              <label for="inpt-nombreUsuario">Nombre:</label>
              <input type="text" name="nombreUsuario" class="formulario_input_nm" id="inpt-nombreUsuario" required />
              <span class="error-message"></span>
            </div>
            <div class="form-group">
              <label for="inpt-correoUsuario">Email:</label>
              <input type="email" name="email" class="formulario_input_nm" id="inpt-correoUsuario" required />
              <span class="error-message"></span>
            </div>
            <div class="form-group">
              <label for="inpt-asunto">Asunto</label>
              <input type="text" name="asunto" class="formulario_input_nm" id="inpt-asunto" />
              <span class="error-message"></span>
            </div>
            <div class="form-group">
              <label for="inpt-descripcion">Mensaje:</label>
              <textarea name="mensaje" id="inpt-descripcion" class="formulario_input_ta" required></textarea>
              <span class="error-message"></span>
            </div>
            <button type="submit" class="formulario_enviar">Enviar Mensaje</button>
          </form>
        </div>
      </section>
    </main>
    <footer id="footer-content">
      <div class="footer" id="footer">
        <ul class="footer_lu">
          <li><a href="https://www.facebook.com/notengofacebook" aria-label="Facebook"><i class="fab fa-facebook"></i></a></li>
          <li><a href="https://www.instagram.com/notengo" aria-label="Instagram"><i class="fab fa-instagram"></i></a></li>
          <li><a href="https://github.com/LozanoD40" aria-label="GitHub"><i class="fab fa-github"></i></a></li>
          <li><a href="https://www.twitter.com/notengotwitter" aria-label="Twitter"><i class="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/in/Diego-Lozano-Mora" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a></li>
          <li><a href="https://wa.me/593963108812" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a></li>
        </ul>
        <hr>
        <p class="footer_p">Diego Lozano © 2025</p>
      </div>
    </footer>
  `,
  styles: [`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.6;
    }

    #main-content {
      width: 100%;
      height: 100%;
    } 

    #footer-content{
      width: 100%;
      height: 100%;
    }

    :root {
      --background: url("../../imagenes/background-dark.jpg"); 
      --color-background: #0f1117; 
      --color-background-altern: rgba(255, 255, 255, 0.1); 
      --color-surface: #1c1f26; 
      --color-text: #e0e0e0; 
      --color-text-altern: #9ca3af; 
      --color-text-hover: #3b82f6; 
      --color-accent: #2563eb; 
      --color-border: #2c2f36; 
      --color-error: #dc3545; 
      --transition-speed: 0.3s ease; 
      --border-radius: 8px; 
    }

    .light-mode {
      --background: url("../../imagenes/background-light.jpg"); 
      --color-background: #e4e9ee; 
      --color-background-altern: rgba(0, 0, 0, 0.05);
      --color-surface: #ffffff; 
      --color-text: #111827; 
      --color-text-altern: #374151; 
      --color-text-hover: #2563eb; 
      --color-accent: #3b82f6; 
      --color-border: #d1d5db; 
      --color-error: #dc2626; 
    }
    
    /* === Estilos del Header === */
    header {
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
    
    header h1 {
      color: var(--color-text-altern);
      font-size: clamp(1rem, 5vw, 7rem);
      font-weight: 700;
    }
    
    nav {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
    
    nav a, nav button {
      text-decoration: none;
      font-size: clamp(0.8rem, 1vw, 3rem);
      color: var(--color-text-altern);
      transition: color var(--transition-speed);
      position: relative;
    }
    
    nav a:hover, nav button:hover {
      color: var(--color-text-hover);
    }
    
    .nav-link i {
      margin-right: 0.5rem;
      color: inherit;
      font-size: 1rem;
      vertical-align: middle;
    }
    
    .theme-btn, .logout-btn {
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
    
    .hamburger-menu.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
    .hamburger-menu.active span:nth-child(2) { opacity: 0; }
    .hamburger-menu.active span:nth-child(3) { transform: rotate(-45deg) translate(7px, -6px); }
    
    @media (max-width: 768px) {
      .hamburger-menu { display: block; }
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
      .main-nav.active { right: 0; }
    }
    
    /* === Estilos del Contenido === */
    .contenido {
      padding: 2rem;
      background: var(--color-background-altern);
      border-radius: 15px;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      text-align: justify;
      margin: 2rem 15px;
      box-sizing: border-box;
      max-width: 100%;
    }
    
    .titulo {
      text-align: center;
      color: var(--color-text-altern);
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    [id] {
      padding-top: 80px;
      margin-top: -80px;
    }
    
    #home { padding-top: 120px; }
    
    #imagen_home {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      margin-bottom: 1rem;
      object-fit: cover;
    }
    
    #contenido_home {
      display: grid;
      grid-template-columns: 200px 1fr;
      gap: 4rem;
      align-items: center;
      justify-content: space-between;
    }
    
    @media (max-width: 768px) {
      #home { padding-top: 60px; }
      #contenido_home {
        grid-template-columns: 1fr;
        justify-items: center;
        text-align: center;
      }
      #imagen_home {
        margin-bottom: 1rem;
      }
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      margin-top: 40px;
    }
    
    .skill-item {
      background-color: var(--color-background-altern);
      padding: 25px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
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
    
    .projects-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }
    
    .card_project {
      background-color: var(--color-background-altern);
      flex: 1 1 250px;
      max-width: 300px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      transition: transform 0.3s, box-shadow 0.3s;
      overflow: hidden;
    }
    
    .card_project:hover {
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
      transform: translateY(-10px);
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
      border-radius: 8px;
      object-fit: cover;
    }
    
    .card_content p {
      text-align: center;
      margin-top: 1rem;
      font-size: 0.9rem;
    }
    
    .referencia {
      background-color: var(--color-background-altern);
      width: 100%;
      height: auto;
      min-height: 300px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      margin: 0 auto 2rem auto;
    }
    
    .referecia_cuerpo {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
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
      padding: 0 40px;
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
    
    .carousel-button:hover { opacity: 1; }
    .prev-button { left: 10px; }
    .next-button { right: 10px; }
    
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
    
    .indicator.active { background-color: var(--color-text-altern); }
    
    .form-group {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
    }
    
    .formulario_input_nm, .formulario_input_ta {
      padding: 0.5rem;
      border: 3px solid var(--color-border);
      border-radius: 5px;
      width: 100%;
      background-color: var(--color-background);
      color: var(--color-text);
      box-sizing: border-box;
    }
    
    .formulario_enviar {
      padding: 0.5rem;
      border: 2px solid var(--color-border);
      border-radius: 5px;
      width: 100%;
      background-color: var(--color-text-altern);
      color: var(--color-background);
      cursor: pointer;
      transition: background-color var(--transition-speed);
    }
    
    .formulario_enviar:hover {
      background-color: var(--color-text-hover);
    }
    
    /* === Estilos del Footer === */
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
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.5rem; 
      list-style: none;
      margin: 1rem 0 2rem 0;
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
  `],
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(public auth: AuthService, private router: Router, private el: ElementRef) { }

  ngOnInit() {
    // Lógica de inicialización
  }

  ngAfterViewInit() {
    // Aquí puedes agregar la lógica de tu carrusel, menú, etc.
  }

  logout() {
    this.auth.logout({ logoutParams: { returnTo: document.location.origin } });
  }

  goToSection(sectionId: string): void {
    const sectionElement = this.el.nativeElement.querySelector(`#${sectionId}`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
