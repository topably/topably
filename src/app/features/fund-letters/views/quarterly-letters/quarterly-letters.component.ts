import { Component, OnInit } from '@angular/core';
import { LetterService } from '../../services/letter.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-quarterly-letters',
  template: `
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Q2 2021 Hedge Fund Letters</h1>
          <h2 class="subtitle">
            Find out what is going on in the opaque world of hedge funds.
          </h2>
          <br>
          <div class="columns">
            <div class="column is-10">
              <div class="columns is-multiline">
                <div class="column is-one-third" *ngFor="let letter of quarterlyLetters$ | async">
                  <app-letter-card [letter]="letter"></app-letter-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./quarterly-letters.component.scss']
})
export class QuarterlyLettersComponent implements OnInit {

  quarterlyLetters$ = this.letterService.getLettersByQuarter('q2-2021')
    .pipe(map(letters => letters.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())));

  constructor(private letterService: LetterService) {
  }

  ngOnInit(): void {
  }

}
