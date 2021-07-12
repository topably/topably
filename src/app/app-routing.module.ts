import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundLettersModule } from './features/fund-letters';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hedge-fund-letters',
    pathMatch: 'full'
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
export class AppRoutingModule {
}
