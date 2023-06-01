import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';

import { LOCAL_DB_CONFIG, LocalDBConfig } from '@fafn/core';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    {
      provide: LOCAL_DB_CONFIG,
      useValue: {
        storeNames: ['tokens'],
      } as Partial<LocalDBConfig>,
    },
  ],
};
