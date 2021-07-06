import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LettersByQuarterComponent } from './views/letters-by-quarter/letters-by-quarter.component';


@NgModule({
  declarations: [
    LettersByQuarterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LettersByQuarterComponent
  ]
})
export class InvestorLetterModule { }
