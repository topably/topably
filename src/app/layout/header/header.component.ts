import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MSAL_GUARD_CONFIG, MsalBroadcastService, MsalGuardConfiguration, MsalService } from '@azure/msal-angular';
import { b2cPolicies } from '../../core/auth/auth/auth.config';
import { EventMessage, EventType } from '@azure/msal-browser';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar is-light is-fixed-top-desktop" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <ng-container *ngIf="userLoggedIn; else anonymous">
                <a class="button is-light" (click)="signOut()">
                  Sign out
                </a>
              </ng-container>
              <ng-template #anonymous>
                <a class="button is-primary" (click)="signUp()">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light" (click)="signIn()">
                  Log in
                </a>
              </ng-template>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  userLoggedIn = false;

  constructor(@Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
              private authService: MsalService,
              private msalBroadcastService: MsalBroadcastService,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.authService.instance.handleRedirectPromise()
      .then(r => {
        this.userLoggedIn = !!r;
        this.cd.detectChanges();
      });
    this.authService.instance.enableAccountStorageEvents();
    this.userLoggedIn = this.authService.instance.getAllAccounts().length > 0;
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.ACCOUNT_ADDED || msg.eventType === EventType.ACCOUNT_REMOVED),
      )
      .subscribe((result: EventMessage) => {
        if (this.authService.instance.getAllAccounts().length === 0) {
          // Account logged out in a different tab, redirect to homepage
          window.location.pathname = '/';
          this.userLoggedIn = false;
        } else {
          this.userLoggedIn = true;
        }
        this.cd.detectChanges();
      });
  }

  signUp(): void {
    this.authService.loginRedirect();
  }

  signIn(): void {
    this.authService.loginRedirect({
      scopes: ['openid'],
      authority: b2cPolicies.authorities.signIn.authority
    });
  }

  signOut(): void {
    this.authService.logoutRedirect();
  }
}
