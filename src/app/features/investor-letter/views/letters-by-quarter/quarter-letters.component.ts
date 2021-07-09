import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letters-by-quarter',
  template: `
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Q3 2021 Hedge Fund Letters</h1>
          <h2 class="subtitle">
            Find out what is going on in the opaque world of hedge funds.
          </h2>
          <br>
          <div class="columns">
            <div class="column is-10">
              <div class="columns is-multiline">
                <div class="column is-one-third">
                  <div class="card">
                    <div class="card-content">
                      <span>July 5</span>
                      <h3 class="title is-size-6 ellipsis is-ellipsis-1">
                        <a class="has-text-dark" href="https://drive.google.com/u/0/uc?id=1z0cVyJJhW2gOIRJjcnm97gLAHPyGB7y5&export=download">
                          Andaz Notes
                        </a>
                      </h3>
                      <span>by Andaz private investments</span>
                      <p class="subtitle is-size-7 ellipsis is-ellipsis-2">
                        Recent updates from Andaz private investments
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./quarter-letters.component.scss']
})
export class QuarterLettersComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
