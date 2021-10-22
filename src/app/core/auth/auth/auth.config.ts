import { BrowserCacheLocation, Configuration, LogLevel } from '@azure/msal-browser';

export const b2cPolicies = {
  names: {
    signUpSignIn: 'B2C_1_SignUp'
  },
  authorities: {
    signUp: {
      authority: 'https://topably.b2clogin.com/topably.onmicrosoft.com/B2C_1_SignUp',
    },
    signIn: {
      authority: 'https://topably.b2clogin.com/topably.onmicrosoft.com/B2C_1_SignIn',
    },
  },
  authorityDomain: 'topably.b2clogin.com'
};

export const authConfig: Configuration = {
  auth: {
    clientId: '24ad5896-8aca-4696-b651-0bc360281846',
    authority: b2cPolicies.authorities.signUp.authority,
    knownAuthorities: [b2cPolicies.authorityDomain],
    redirectUri: '/auth',
    postLogoutRedirectUri: '/',
    navigateToLoginRequestUrl: true
  },
  cache: {
    cacheLocation: BrowserCacheLocation.LocalStorage,
    storeAuthStateInCookie: false
  },
  system: {
    loggerOptions: {
      logLevel: LogLevel.Verbose,
      piiLoggingEnabled: false
    }
  }
};
