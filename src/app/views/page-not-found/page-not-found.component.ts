import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <section class="section hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column has-text-centered">
              <h1 class="title is-size-1">404 Page Not Found</h1>
              <p class="subtitle">An unexpected error has occurred</p>
              <a class="button is-uppercase" [routerLink]="['/']">Homepage</a>
            </div>
            <div class="column has-text-centered">
              <img src="./assets/images/404-robot.gif"  alt="Page not found"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
