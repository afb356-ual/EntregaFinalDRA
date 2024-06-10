import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/api/usuario/login';
  private registerUrl = 'http://localhost:8080/api/usuario/register';

  constructor(private http: HttpClient) {
    const storedUserId = localStorage.getItem('currentUserId');

  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(this.loginUrl, credentials).pipe(
      tap(response => {
        if (response.id) {
          localStorage.setItem('currentUserId', response.id);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('currentUserId');
  }

  register(user: { nombre: string, email: string, password: string }): Observable<any> {
    return this.http.post<any>(this.registerUrl, user);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/usuario/${id}`);
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/usuario/${id}`, user);
  }



}
