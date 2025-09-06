import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// Cambiar el nombre para evitar conflictos
export class CustomAuthService { // ← Cambiar nombre
  private apiUrl = 'https://tu-api.com/login';
  
  constructor(private http: HttpClient) { }
  
  login(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }
}
