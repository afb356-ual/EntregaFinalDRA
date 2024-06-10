import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HarrypotterService {

  private apiUrl = 'http://localhost:8080/api/harrypotter';

  constructor(private http: HttpClient) { }

  getHarryPotterInfo(): Observable<string> {
    return this.http.get(this.apiUrl, { responseType: 'text' });
  }
}
