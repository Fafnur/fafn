import { ApplicationConfig } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';

import { LOCAL_DB_CONFIG, LocalDBConfig } from '@fafn/core';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    {
      provide: LOCAL_DB_CONFIG,
      useValue: {
        storeNames: ['tokens'],
      } as Partial<LocalDBConfig>,
    },
  ],
};
