import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'https://api.potterdb.com/v1/characters';
  private spellsUrl = 'https://api.potterdb.com/v1/spells';


  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      switchMap(response => {
        const totalPages = response.meta.pagination.last;
        const requests = [];
        for (let i = 1; i <= totalPages; i++) {
          requests.push(this.http.get<any>(`${this.apiUrl}?page[number]=${i}`));
        }
        return forkJoin(requests);
      }),
      map((responses: any[]) => {
        return responses.flatMap(response => response.data);
      }),
      catchError(error => {
        console.error('Error fetching characters', error);
        return of([]);
      })
    );
  }

  getCharacterById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  
  getSpells(): Observable<any[]> {
    return this.http.get<any>(this.spellsUrl).pipe(
      switchMap(response => {
        const totalPages = response.meta.pagination.last;
        const requests = [];
        for (let i = 1; i <= totalPages; i++) {
          requests.push(this.http.get<any>(`${this.spellsUrl}?page[number]=${i}`));
        }
        return forkJoin(requests);
      }),
      map((responses: any[]) => {
        return responses.flatMap(response => response.data);
      }),
      catchError(error => {
        console.error('Error fetching spells', error);
        return of([]);
      })
    );
  }
}
