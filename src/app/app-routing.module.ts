import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestorLetterModule, QuarterLettersComponent } from './features/investor-letter';

const routes: Routes = [
  {
    path: '',
    component: QuarterLettersComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
}),
    InvestorLetterModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
