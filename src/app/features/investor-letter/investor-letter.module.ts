import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuarterLettersComponent } from './views/letters-by-quarter/quarter-letters.component';


@NgModule({
  declarations: [
    QuarterLettersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QuarterLettersComponent
  ]
})
export class InvestorLetterModule { }
