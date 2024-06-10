import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'https://api.potterdb.com/v1/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getChapters(bookId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${bookId}/chapters`);
  }

  getBookDetails(bookId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${bookId}`);
  }
}
