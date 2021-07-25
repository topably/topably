import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LetterService } from '../../services/letter.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Letter } from '../../types/letter';
import { first } from 'rxjs/operators';
import { getLatestQuarterDate, stringifyQuarter } from '../../helpers/quarter.helpers';

@Component({
  selector: 'app-quarterly-letters',
  template: `
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{pageTitlePrefix}} Investor Letters</h1>
          <h2 class="subtitle">
            Find out what is going on in the opaque world of hedge funds and asset management firms.
          </h2>
          <br>
          <div class="columns">
            <div class="column is-12">
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
  styleUrls: ['./quarterly-letters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuarterlyLettersComponent implements OnInit {

  quarter!: string;

  quarterlyLetters$!: Observable<Letter[]>;

  pageTitlePrefix!: string;

  constructor(public letterService: LetterService,
              private titleService: Title,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.url.pipe(first()).subscribe(urlSegment => {
      this.quarter = urlSegment.length > 0 ? urlSegment[urlSegment.length - 1].path : stringifyQuarter(getLatestQuarterDate());
      this.quarterlyLetters$ = this.letterService.getLettersByQuarter(this.quarter);
      this.pageTitlePrefix = this.quarter.split('-').join(' ').toUpperCase();
      this.titleService.setTitle(`${this.pageTitlePrefix} Investor Letters. ${this.pageTitlePrefix} Hedge Fund Letters.`);
    });
  }

}
