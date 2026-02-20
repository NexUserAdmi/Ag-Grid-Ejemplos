import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    /*{
      provide: GRID_GLOBAL_CONFIG,
      useValue: {
        localeText: AG_GRID_LOCALE_ES,
        defaultColDef: { flex: 1, filter: true, floatingFilter: true }
      }
    }*/
  ],
};
