import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { QuarterlyLettersComponent } from './views/quarterly-letters/quarterly-letters.component';

const routes: Routes = [
  {
    path: 'hedge-fund-letters', children: [
      {path: '', component: QuarterlyLettersComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundLettersRoutingModule {

}
