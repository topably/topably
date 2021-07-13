import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundLettersModule } from './features/fund-letters';
import { PageNotFoundComponent, ViewsModule } from './views/views';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hedge-fund-letters',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    }),
    FundLettersModule,
    ViewsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
