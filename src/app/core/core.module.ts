import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiPrefixInterceptor } from './http/api-prefix.interceptor';
import { AuthModule } from './auth/auth/auth.module';

@NgModule({
  imports: [AuthModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    }
  ],
  exports: [
    AuthModule
  ]
})
export class CoreModule {
}
