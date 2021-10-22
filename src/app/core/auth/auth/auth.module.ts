import { NgModule } from '@angular/core';
import { InteractionType, IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { authConfig } from './auth.config';
import {
  MSAL_GUARD_CONFIG,
  MSAL_INSTANCE,
  MsalBroadcastService,
  MsalGuard,
  MsalGuardConfiguration,
  MsalModule, MsalRedirectComponent,
  MsalService
} from '@azure/msal-angular';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication(authConfig);
}

export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return {
    interactionType: InteractionType.Redirect,
  };
}

@NgModule({
  declarations: [],
  imports: [
    MsalModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory
    },
    MsalService,
    MsalGuard,
    MsalBroadcastService
  ],
  bootstrap: [MsalRedirectComponent]
})
export class AuthModule { }
