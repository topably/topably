import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor(private metaTagService: Meta) {
  }

  ngOnInit(): void {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Investor letters, fund letters, fund reports, letters to shareholders' },
      { name: 'robots', content: 'index, follow' },
    ]);
  }
}
