// src/app/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://tu-api.com/login'; // Reemplaza esto con la URL de tu API de login

  constructor(private http: HttpClient) { }

  login(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }
}