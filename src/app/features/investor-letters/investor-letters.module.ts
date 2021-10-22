import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterCardComponent } from './components/letter-card/letter-card.component';
import { QuarterlyLettersComponent } from './views/quarterly-letters/quarterly-letters.component';
import { InvestorLettersRoutingModule } from './investor-letters-routing.module';
import { LayoutModule } from '../../layout/layout.module';


@NgModule({
  declarations: [
    QuarterlyLettersComponent,
    LetterCardComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    InvestorLettersRoutingModule
  ],
  exports: [
    QuarterlyLettersComponent
  ]
})
export class InvestorLettersModule { }
