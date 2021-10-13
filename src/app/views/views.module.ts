import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { ComingSoonPageComponent } from './coming-soon-page/coming-soon-page.component';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    ComingSoonPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PageNotFoundComponent
  ]
})
export class ViewsModule { }
