import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestorLetterModule, LettersByQuarterComponent } from './features/investor-letter';

const routes: Routes = [
  {
    path: '',
    component: LettersByQuarterComponent
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
