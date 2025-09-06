import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://tu-api.com/login'; // Asegúrate de que esta URL sea correcta

  constructor(private http: HttpClient) { } // Constructor va aquí

  login(userData: any): Observable<any> { // Método va aquí
    return this.http.post(this.apiUrl, userData);
  }
}
