import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestorLettersModule } from './features/investor-letters';
import { ComingSoonPageComponent, PageNotFoundComponent, ViewsModule } from './views';
import { MsalRedirectComponent } from '@azure/msal-angular';

const routes: Routes = [
  {
    path: '',
    component: ComingSoonPageComponent
  },
  {
    path: 'auth',
    component: MsalRedirectComponent
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
