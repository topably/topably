import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Letter } from '../types/letter';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LetterService {

  constructor(private http: HttpClient) {
  }

  getLettersByQuarter(quarter: string): Observable<Letter[]> {
    return this.http.get<Letter[]>(`/assets/data/letters/${quarter}.json`)
      .pipe(map(letters => letters.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())));
  }
}
