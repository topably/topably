import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SingleColumnLayoutComponent } from './single-column-layout/single-column-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    SingleColumnLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SingleColumnLayoutComponent
  ]
})
export class LayoutModule { }
