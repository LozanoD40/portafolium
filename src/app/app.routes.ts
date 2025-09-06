import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent  } from './LoginComponent/login.component';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { 
    path: 'home', 
    component: HomeComponent,
    canActivate: [AuthGuard] // <-- Protege esta ruta
  },
  { path: 'login', component: LoginComponent },
];