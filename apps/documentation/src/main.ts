import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';

import { LOCAL_DB_CONFIG, LocalDBConfig } from '@fafn/core';

import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    {
      provide: LOCAL_DB_CONFIG,
      useValue: {
        storeNames: ['tokens'],
      } as Partial<LocalDBConfig>,
    },
  ],
}).catch((err) => console.error(err));
