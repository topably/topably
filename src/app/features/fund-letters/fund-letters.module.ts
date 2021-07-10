import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterCardComponent } from './components/letter-card/letter-card.component';
import { QuarterlyLettersComponent } from './views/quarterly-letters/quarterly-letters.component';


@NgModule({
  declarations: [
    QuarterlyLettersComponent,
    LetterCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QuarterlyLettersComponent
  ]
})
export class FundLettersModule { }
