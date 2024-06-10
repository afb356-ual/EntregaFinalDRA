// src/app/services/movie.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl = 'https://api.potterdb.com/v1/movies';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getMovieDetails(movieId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${movieId}`);
  }
}
