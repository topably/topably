import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterCardComponent } from './components/letter-card/letter-card.component';
import { QuarterlyLettersComponent } from './views/quarterly-letters/quarterly-letters.component';
import { FundLettersRoutingModule } from './fund-letters-routing.module';


@NgModule({
  declarations: [
    QuarterlyLettersComponent,
    LetterCardComponent
  ],
  imports: [
    CommonModule,
    FundLettersRoutingModule
  ],
  exports: [
    QuarterlyLettersComponent
  ]
})
export class FundLettersModule { }
