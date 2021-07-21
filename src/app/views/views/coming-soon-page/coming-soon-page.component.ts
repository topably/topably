import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coming-soon-page',
  template: `
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-8 is-offset-2 is-6-widescreen is-offset-3-widescreen">
            <p class="title is-1">COMING SOON.</p>
            <div class="container area-center">
              <p class="subtitle is-4">
                Homepage of our website is under construction, but page that aggregates recent Investor Letters is ready. Check it out!
              </p>
              <button class="button is-info is-large" [routerLink]="['/hedge-fund-letters']">
                Investor Letters
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./coming-soon-page.component.scss']
})
export class ComingSoonPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
