import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundLettersModule } from './features/fund-letters';
import { ComingSoonPageComponent, PageNotFoundComponent, ViewsModule } from './views/views';

const routes: Routes = [
  {
    path: '',
    component: ComingSoonPageComponent
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
