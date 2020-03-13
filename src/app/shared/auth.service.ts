import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:3000/api/v1';
  constructor(private http: HttpClient, private router: Router) { }

  registerUser(path: string, userDetails) {
    return this.http.post(`${this.baseUrl}/${path}`, userDetails);
  }

  loginUser(path: string, userDetails) {
    return this.http.post(`${this.baseUrl}/${path}`, userDetails);
  }

  loggedIn() {
    return !!localStorage.getItem('x-access-token');
  }

  logOut() {
    localStorage.removeItem('x-access-token');
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }

  getAccessToken() {
    return localStorage.getItem('x-access-token');
  }
}
