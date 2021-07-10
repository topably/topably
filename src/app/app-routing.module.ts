import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundLettersModule, QuarterlyLettersComponent } from './features/fund-letters';

const routes: Routes = [
  {
    path: '',
    component: QuarterlyLettersComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
}),
    FundLettersModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
