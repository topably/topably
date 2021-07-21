import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestorLettersModule } from './features/investor-letters';
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
    InvestorLettersModule,
    ViewsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
