// src/app/services/spell.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpellService {
  private baseUrl = 'https://api.potterdb.com/v1/spells';

  constructor(private http: HttpClient) { }

  getSpells(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getSpell(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
