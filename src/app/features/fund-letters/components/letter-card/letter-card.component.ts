import { Component, Input, OnInit } from '@angular/core';
import { Letter } from '../../types/Letter';

@Component({
  selector: 'app-letter-card',
  template: `
    <div class="card">
      <div class="card-content">
        <span>{{letter.date | date:'MMMM d':'UTC'}}</span>
        <h3 class="title is-size-6 ellipsis is-ellipsis-1 mb-0">
          <a class="has-text-dark" [title]="letter.title" [href]="letter.url">
            {{letter.title}}
          </a>
        </h3>
        <span class="is-size-7">by {{letter.fund}}</span>
        <p class="subtitle is-size-6 ellipsis is-ellipsis-2 mt-2">
          {{ letter.description ? letter.description : 'Recent updates from ' + letter.fund }}
        </p>
      </div>
    </div>
  `,
  styleUrls: ['./letter-card.component.scss']
})
export class LetterCardComponent implements OnInit {

  @Input()
  letter!: Letter;

  constructor() { }

  ngOnInit(): void {
  }

}
