import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterCardComponent } from './components/letter-card/letter-card.component';
import { QuarterlyLettersComponent } from './views/quarterly-letters/quarterly-letters.component';
import { InvestorLettersRoutingModule } from './investor-letters-routing.module';


@NgModule({
  declarations: [
    QuarterlyLettersComponent,
    LetterCardComponent
  ],
  imports: [
    CommonModule,
    InvestorLettersRoutingModule
  ],
  exports: [
    QuarterlyLettersComponent
  ]
})
export class InvestorLettersModule { }
