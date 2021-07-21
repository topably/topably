import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { QuarterlyLettersComponent } from './views/quarterly-letters/quarterly-letters.component';
import { environment } from '@env';
import { eachQuarterOfInterval } from 'date-fns';
import { getLatestQuarterDate, stringifyQuarter } from './helpers/quarter.helpers';

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

const routes: Routes = [
  {
    path: 'investor-letters',
    children: generateChildrenRoutes(environment.initialQuarterDate, getLatestQuarterDate())
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestorLettersRoutingModule {

}
