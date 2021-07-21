import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { QuarterlyLettersComponent } from './views/quarterly-letters/quarterly-letters.component';
import { environment } from '@env';
import { eachQuarterOfInterval, subMonths } from 'date-fns';
import { stringifyQuarter } from './helpers/quarter.helpers';

function generateChildrenRoutes(start: Date, end: Date): Routes {
  const quarterRoutes = eachQuarterOfInterval({start, end})
    .map(quarterDate => {
      return {path: stringifyQuarter(quarterDate), component: QuarterlyLettersComponent};
    });
  return [
    {path: '', component: QuarterlyLettersComponent},
    ...quarterRoutes
  ];
}

const today = new Date();
const latestQuarterDate = subMonths(today, 3);

const routes: Routes = [
  {
    path: 'hedge-fund-letters',
    children: generateChildrenRoutes(environment.initialQuarterDate, latestQuarterDate)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundLettersRoutingModule {

}
