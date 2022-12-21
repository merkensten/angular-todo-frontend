import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // URL of the backend API
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  // Method to send a login request to the backend API
  login(username: string, password: string): Observable<boolean> {
    // Send a POST request to the login endpoint with the email and password as the request body
    return this.http
      .post<{ token: string }>(`${this.apiUrl}/auth/login`, {
        username,
        password,
      })
      .pipe(
        // If the request is successful, store the token in local storage and return true
        map((result) => {
          localStorage.setItem('access_token', result.token);
          return true;
        })
      );
  }

  // Method to log out the user by removing the token from local storage
  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/']);
  }

  // Method to check if the user is logged in by checking for the presence of a token in local storage
  getCurrentUserState(): boolean {
    return !!localStorage.getItem('access_token');
  }
}
