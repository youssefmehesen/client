import { ApplicationConfig } from '@angular/core';
<<<<<<< HEAD
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,withViewTransitions()),
     provideClientHydration(),
     provideHttpClient(withFetch()),
     provideAnimations()
    ]
=======
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
>>>>>>> 6afdd037728194054a400117cad7ba2911dc1c21
};
