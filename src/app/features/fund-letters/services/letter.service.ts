import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Letter } from '../types/Letter';

@Injectable({
  providedIn: 'root'
})
export class LetterService {

  constructor(private http: HttpClient) {
  }

  getLettersByQuarter(quarter: string): Observable<Letter[]> {
    return this.http.get<Letter[]>(`/assets/data/letters/${quarter}.json`);
  }
}
