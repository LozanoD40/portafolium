// src/app/app.config.ts

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // Asegúrate de que los valores aquí son los correctos
    provideAuth0({
      domain: 'dev-pvzzaueuqbmt31f6.us.auth0.com',  // <-- Revisa que sea exactamente el tuyo
      clientId: 'GvU0zT3jYx08geYMICM0nha1VaJWftiQ'    // <-- Revisa que sea exactamente el tuyo
    })
  ]
};