import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-single-column-layout',
  template: `
    <app-header></app-header>
    <div class="container">
      <router-outlet></router-outlet>
    </div>

  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleColumnLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
